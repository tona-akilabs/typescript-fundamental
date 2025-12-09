// types/global.d.ts
export {};

declare global {
    interface GlobalThis {
        myConfig: {
            apiUrl: string;
            debug: boolean;
        };
        appGlobal: {
            [key: string]: unknown;
        };
        [key: string]: any; // ⚠️ very loose!
    }
}