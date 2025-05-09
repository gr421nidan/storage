enum ERouterPath {
    MAIN_PAGE = '/',
    SIGN_IN_PAGE = '/sign-in',
    SIGN_UP_PAGE = '/sign-up',
    RESET_PAGE = '/reset-page',
    USERS = '/storage-users',
    USER_PROFILE = '/profile',
    STORAGE_SETTINGS = '/storage-settings',
    STORAGE_TRASH = '/storage-trash',
    AVAILABLE_STORAGES = '/available-storages',
    USER_LOGS = '/users/:id_user',
    CONNECTING_STORAGE = '/connect',
    FORBIDDEN_PAGE = '/forbidden',
    STORAGE = '/storage/:id_storage',
    USER_FILE_VIEW = '/access/file/:file_id',
    USER_FOLDER_VIEW = '/access/folder/:folder_id',
}

export default ERouterPath
