import React, { useContext } from "react";
import { Alert, Snackbar } from "@mui/material";
import { NotificationContext } from "../../context/NotificationContext";

const SimpleSnackbar = () => {
  const { notification, open, setOpen } = useContext(NotificationContext);

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert severity="success">{notification}</Alert>
      </Snackbar>
    </div>
  );
};

export default SimpleSnackbar;
