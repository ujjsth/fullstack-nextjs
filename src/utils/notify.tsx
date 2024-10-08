import { toast } from 'react-toastify';

export const showSucces = (msg:any) =>{
    return toast.success(msg);
}

export const showError = (msg:any) =>{
    return toast.error(msg);
}

export const showInfo = (msg:any) =>{
    return toast.info(msg);
}

export const showWarning = (msg:any) =>{
    return toast.warning(msg);
};