import {useEffect, useState} from "react";

/**
 * 返回window是否失去焦点
 */
export function useWindowBlur() {
    const [blur, setBlur] = useState<boolean>(true);
    useEffect(() => {
        const blurListener = () => setBlur(true);
        const focusListener = () => setBlur(false);
        window.addEventListener('blur', blurListener);
        window.addEventListener('focus', focusListener);
        return () => {
            window.removeEventListener('blur', blurListener);
            window.removeEventListener('focus', focusListener);
        }
    }, []);
    return blur;
}
