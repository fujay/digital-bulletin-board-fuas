"use client";

import {
  NotificationData,
  useNotificationContext,
} from "@/store/notification-context";

export default function Notification({
  title,
  message,
  status,
}: NotificationData) {
  const { hideNotification } = useNotificationContext();

  let statusClasses = "";
  switch (status) {
    case "success":
      statusClasses = "bg-green-500";
      break;
    case "error":
      statusClasses = "bg-red-500";
      break;
    case "pending":
      statusClasses = "bg-yellow-500";
      break;
  }

  return (
    <div
      className={`fixed bottom-[0] left-[0] h-20 w-full bg-[#1b1b1b] flex justify-between items-center text-[white] px-[10%] py-2 [box-shadow:0_-3px_6px_rgba(0,_0,_0,_0.2)] ${statusClasses}`}
      onClick={hideNotification}
    >
      <h2 className="text-white m-0 text-[1.25rem]">{title}</h2>
      <p>{message}</p>
    </div>
  );
}
