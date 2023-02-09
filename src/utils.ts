import {OSTypes} from "./types";

export function getSystemOS(): OSTypes.Mac | OSTypes.Windows {
    // explicitly set these to avoid issues
    const w = window || null;
    const n = navigator || null;
    const p = (w && w.process) || null;

    // via node
    if (p && p.platform) {
        if (p.platform === 'darwin') {
            return OSTypes.Mac;
        }
        if (p.platform.includes('win')) {
            return OSTypes.Windows;
        }
    }

    // via user agent
    if (n && n.userAgent) {
        if (n.userAgent.includes('Macintosh')) {
            return OSTypes.Mac;
        }
        if (n.userAgent.includes('Windows')) {
            return OSTypes.Windows;
        }
    }
    // default to macOs
    return OSTypes.Mac;
}
