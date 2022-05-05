import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const toastSuccessNotify = (msg) => {
    toast.success(msg, {
      position:"top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  
  export const toastWarningNotify = (msg) => {
    toast.warning(msg, {
      position:"bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  
  export const toastInfoNotify = (msg) => {
    toast.info(msg, {
      position:"bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  export const toastDefaultNotify = (msg) => {
    toast.default(msg, {
      position:"top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };