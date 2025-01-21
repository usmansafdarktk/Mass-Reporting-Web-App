import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideAlert } from '../../redux/actions/alertActions';
import SuccessIcon from '../../assets/customIcons/toastIcons/SuccessIcon.svg?react';
import WarningIcon from '../../assets/customIcons/toastIcons/WarningIcon.svg?react';
import ErrorIcon from '../../assets/customIcons/toastIcons/ErrorIcon.svg?react';
import CancelIcon from '../../assets/customIcons/generalIcons/CancelIcon.svg?react';

const Toast = () => {
    const dispatch = useDispatch();
    const { visible, type, message } = useSelector((state) => state.alert);

    

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                dispatch(hideAlert());
            }, 4000);

            return () => clearTimeout(timer); // Cleanup on unmount or when `visible` changes
        }
    }, [visible, dispatch]);

    if (!visible) return null;

    const handleClose = () => {
        dispatch(hideAlert());
    };

    const getBackgroundColor = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500';
            case 'error':
                return 'bg-red-500';
            case 'warning':
                return 'bg-yellow-500';
            default:
                return 'bg-gray-800';
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <SuccessIcon />;
            case 'error':
                return <ErrorIcon />;
            case 'warning':
                return <WarningIcon />;
            default:
                return <ErrorIcon />;
        }
    };

    return (
        <div className={`z-[1] fixed top-5 right-5 p-4 rounded-[10px] shadow-lg text-white flex items-center justify-between space-x-4 ${getBackgroundColor()} w-478px h-85px`}>

            {getIcon()}

            <span>{message}</span>

            <button onClick={handleClose} className="bg-transparent hover:bg-white hover:text-black rounded-full p-1">
                <CancelIcon />
            </button>
        </div>
    );
};

export default Toast;
