import React, { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState();
  const [open, setOpen] = useState(false);

  const newNotification = (message) => {
    setNotification(message);
    setOpen(true);
  };

  return (
    <NotificationContext.Provider
      value={{
        notification,
        newNotification,
        open,
        setOpen,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
