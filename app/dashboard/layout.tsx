// "use client";

import { Inter } from "next/font/google";
import NotificationContextProvider, {
  useNotificationContext,
} from "@/store/notification-context";
import Notification from "@/components/UI/Notification";
import DashboardHeader from "@/components/dashboard-header";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { notification } = useNotificationContext();

  return (
    <section className={`${inter.className} bg-neutral-200/70 h-screen`}>
      <NotificationContextProvider>
        <DashboardHeader />
        {children}
        {/* {notification && (
          <Notification
            title={notification.title}
            message={notification.message}
            status={notification.status}
          />
        )} */}
      </NotificationContextProvider>
    </section>
  );
}
