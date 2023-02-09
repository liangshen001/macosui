import {OSTypes} from "../types";
import {getSystemOS} from "../utils";
import {useEffect, useState} from "react";

/**
 * 返回系统的具体的OS
 * @param os
 */
export function useSystemOS(os: OSTypes | undefined) {
    const [resultOS, setResultOS] = useState<OSTypes.Windows | OSTypes.Mac>();
    useEffect(() => {
        const systemOS = (!os || os === OSTypes.Auto) ? getSystemOS() : os;
        setResultOS(systemOS);
    }, [os]);
    return resultOS;
}
