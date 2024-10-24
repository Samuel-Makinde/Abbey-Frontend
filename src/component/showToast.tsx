import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastType = "success" | "error" | "default";

export const showToast = (message: string, type: ToastType = "default"): void => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast(message);
  }
};
