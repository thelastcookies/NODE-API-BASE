interface ImportMetaEnv {
    // 接口端口
    readonly PORT: string;
    // 开发调试模式
    readonly DEBUG: string;
    // 数据库连接字符串
    readonly DATABASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
