import prisma from "@/lib/db";
import ActivityGraph from "./ActivityGraph";
import DashCard from "./DashCards";

const weekOverview = async () => {
  const data = [];

  for (let i = -1; i < 6; i++) {
    const upperLimitDate = new Date();
    upperLimitDate.setDate(upperLimitDate.getDate() - i);
    upperLimitDate.setUTCHours(0, 0, 0, 0);

    const lowerLimitDate = new Date();
    lowerLimitDate.setDate(lowerLimitDate.getDate() - (i + 1));
    lowerLimitDate.setUTCHours(0, 0, 0, 0);
    const dayCount = await prisma.bulletin.count({
      where: {
        createdAt: {
          gte: lowerLimitDate,
          lte: upperLimitDate,
        },
      },
    });
    data.push({
      date: lowerLimitDate.toLocaleDateString(),
      datasets: dayCount,
    });
  }

  return data.reverse();
};

export default async function DashGrid() {
  const dataCount = (await prisma.bulletin.count()).toString();

  const data = await weekOverview();

  const { createdAt: oldestDataEntry } = (await prisma.bulletin.findFirst({
    orderBy: { createdAt: "asc" },
  })) as { createdAt: Date };

  const { createdAt: newestDataEntry } = (await prisma.bulletin.findFirst({
    orderBy: { createdAt: "desc" },
  })) as { createdAt: Date };

  const dayCount = (
    await prisma.bulletin.count({
      where: {
        createdAt: { gte: new Date(new Date().toISOString().split("T")[0]) },
      },
    })
  ).toString();

  return (
    <div className="px-4 grid gap-3 lg:grid-cols-4">
      <DashCard
        allDataCounted={dataCount}
        allDataPeriod={`${oldestDataEntry.toLocaleDateString()} - ${newestDataEntry.toLocaleDateString()}`}
        todayDataCounted={dayCount}
      />

      <ActivityGraph data={data} />
    </div>
  );
}
