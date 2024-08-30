"use client";

import { createContext, useContext, useEffect, useState } from "react";

type NotificationContextProviderProps = {
  children: React.ReactNode;
};

type NotificationStatus = "pending" | "success" | "error";

export type NotificationData = {
  title: string;
  message: string;
  status: NotificationStatus;
};

type NotificationContextValue = {
  notification: NotificationData | null;
  showNotification: (notificationData: NotificationData) => void;
  hideNotification: () => void;
};

const NotificationContext = createContext<NotificationContextValue | null>(
  null
  /* {
  notification: null,
  showNotification: function (notificationData) {},
  hideNotification: function () {},
} */
);

export function useNotificationContext() {
  const notificationContext = useContext(NotificationContext);

  if (!notificationContext) {
    throw new Error(
      "NotificationContext is null - useNotificationContext must be used within a NotificationContextProvider"
    );
  }

  return notificationContext;
}

export default function NotificationContextProvider({
  children,
}: NotificationContextProviderProps) {
  const [activeNotification, setActiveNotification] =
    useState<NotificationData | null>(
      null /* { message: "", status: "error", title: "" } */
    );

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null); //hideNotificationHandler();
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData: NotificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}
