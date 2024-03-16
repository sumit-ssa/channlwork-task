import { toast } from "react-toastify";

export const SuccessAlert = (msg) => {
  toast.success(msg, {
    position: "bottom-right",
    autoClose: 1000,
  });
};

export const FailureAlert = (msg) => {
  toast.error(msg, {
    autoClose: 1000,
    position: "bottom-right",
  });
};
