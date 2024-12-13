interface ImportMetaEnv {
    readonly PORT: string;
    readonly DATABASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
