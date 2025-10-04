import ProxySettings from "./proxy-settings";
import * as Fs from "fs";

interface UserKeyPair {
    user: string;
    key: string;
}

interface ServerPair {
    url: string;
    port: string;
}

interface ApiKeyPair {
    api_key: string;
}

export interface PowSettings {
    xpow?: ApiKeyPair
    rates_api?: ApiKeyPair
    dpow?: UserKeyPair
    bpow?: UserKeyPair
    work_server?: ServerPair
}

/** Reads proof-of-work settings from file */
export function readPowSettings(path: string, settings: ProxySettings): PowSettings {
    try {
        const readSettings: PowSettings = JSON.parse(Fs.readFileSync(path, 'utf-8'))
        return {
            xpow: settings.use_xpow ? readSettings.xpow : undefined,
            rates_api: readSettings.rates_api,
            dpow: settings.use_dpow ? readSettings.dpow : undefined,
            bpow: settings.use_bpow ? readSettings.bpow : undefined,
            work_server: settings.use_work_server ? readSettings.work_server : undefined,
        }
    }
    catch(e) {
        console.log("Could not read pow_creds.json", e)
        return {
            xpow: undefined,
            rates_api: undefined,
            dpow: undefined,
            bpow: undefined,
            work_server: undefined,
        }
    }
}
