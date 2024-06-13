interface ImportMetaEnv {
    readonly APP_TITLE: string;
    readonly APP_BUILD_NAME: string;
    readonly APP_ROUTE_PAGE_MODE: string;
    readonly APP_LOAD_ACTION_TYPE: 'FRONTEND' | 'BACKEND';
    readonly APP_HOMEPAGE_ID: string;
    readonly APP_SOURCE_MAP: boolean;
    readonly APP_LOGIN_ENABLE: boolean;
    readonly APP_API_BASE_URL: string;
    readonly APP_API_PERM_URL: string;
    readonly APP_API_GO_URL: string;
    readonly APP_API_MOCK_URL: string;

}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
