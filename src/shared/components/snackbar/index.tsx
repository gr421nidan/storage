import {SnackbarContent, CustomContentProps, closeSnackbar} from 'notistack';
import {Icon} from '@iconify/react';
import {forwardRef} from 'react';
import {
    buttonStyle,
    flexStyle,
    iconErrorStyles,
    iconSuccessStyles,
    messageStyles,
    snackbarContentStyle
} from "./style";

const CustomSnackbar = forwardRef<HTMLDivElement, CustomContentProps>(({id, message, variant}, ref) => {
    const isError = variant === 'errorSnackbar';
    return (
        <SnackbarContent ref={ref} className={snackbarContentStyle}>
            <div className={`${flexStyle} gap-3`}>
                <div className={`${flexStyle} gap-2`}>
                    {isError ? (<div className={iconErrorStyles}>
                        <Icon icon="iconamoon:close" width="40" height="40"/>
                    </div>):<div className={iconSuccessStyles}>
                        <Icon icon="iconamoon:check-bold" width="40" height="40"/>
                    </div>}
                    <p className={messageStyles}>{message}</p>
                </div>
            </div>
            <button onClick={() => closeSnackbar(id)} className={buttonStyle}>
                <Icon icon="iconamoon:close" width="40" height="40"/>
            </button>
        </SnackbarContent>
    );
});

export default CustomSnackbar;
