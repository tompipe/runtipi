/* eslint-disable */
export default async () => {
    const t = {
        ["./app.dto"]: await import("./app.dto"),
        ["./modules/auth/dto/auth.dto"]: await import("./modules/auth/dto/auth.dto"),
        ["./modules/apps/dto/app.dto"]: await import("./modules/apps/dto/app.dto"),
        ["./modules/backups/dto/backups.dto"]: await import("./modules/backups/dto/backups.dto"),
        ["./modules/repos/dto/repos.dto"]: await import("./modules/repos/dto/repos.dto"),
        ["./modules/links/dto/links.dto"]: await import("./modules/links/dto/links.dto"),
        ["./modules/system/dto/system.dto"]: await import("./modules/system/dto/system.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./modules/apps/dto/app-info.dto"), { "AppInfoSimpleDto": {}, "AppInfoDto": {} }], [import("./modules/user/dto/user.dto"), { "UserDto": {} }], [import("./app.dto"), { "UserSettingsDto": {}, "PartialUserSettingsDto": {}, "AppContextDto": {}, "UserContextDto": {}, "AcknowledgeWelcomeBody": {} }], [import("./modules/queue/queue.entity"), { "Queue": { queueNameResponse: { required: true, type: () => String } } }], [import("./modules/auth/dto/auth.dto"), { "LoginBody": {}, "VerifyTotpBody": {}, "LoginDto": {}, "RegisterBody": {}, "RegisterDto": {}, "ChangeUsernameBody": {}, "ChangePasswordBody": {}, "GetTotpUriBody": {}, "GetTotpUriDto": {}, "SetupTotpBody": {}, "DisableTotpBody": {}, "ResetPasswordBody": {}, "ResetPasswordDto": {}, "CheckResetPasswordRequestDto": {} }], [import("./modules/app-lifecycle/dto/app-lifecycle.dto"), { "AppFormBody": {}, "UninstallAppBody": {} }], [import("./modules/apps/dto/app.dto"), { "SearchAppsQueryDto": {}, "SearchAppsDto": {}, "UpdateInfoDto": {}, "AppDto": {}, "MyAppsDto": {}, "GuestAppsDto": {}, "AppDetailsDto": {} }], [import("./modules/backups/dto/backups.dto"), { "BackupDto": {}, "RestoreAppBackupDto": {}, "GetAppBackupsDto": {}, "GetAppBackupsQueryDto": {}, "DeleteAppBackupBodyDto": {} }], [import("./modules/repos/dto/repos.dto"), { "PullDto": {} }], [import("./modules/links/dto/links.dto"), { "LinkBodyDto": {}, "EditLinkBodyDto": {}, "LinksDto": {} }], [import("./modules/system/dto/system.dto"), { "LoadDto": {} }]], "controllers": [[import("./app.controller"), { "AppController": { "userContext": { type: t["./app.dto"].UserContextDto }, "appContext": { type: t["./app.dto"].AppContextDto }, "updateUserSettings": {}, "acknowledgeWelcome": {}, "getError": {} } }], [import("./modules/auth/auth.controller"), { "AuthController": { "login": { type: t["./modules/auth/dto/auth.dto"].LoginDto }, "verifyTotp": { type: t["./modules/auth/dto/auth.dto"].LoginDto }, "register": { type: t["./modules/auth/dto/auth.dto"].RegisterDto }, "logout": {}, "changeUsername": {}, "changePassword": {}, "getTotpUri": { type: t["./modules/auth/dto/auth.dto"].GetTotpUriDto }, "setupTotp": {}, "disableTotp": {}, "resetPassword": { type: t["./modules/auth/dto/auth.dto"].ResetPasswordDto }, "cancelResetPassword": {}, "checkResetPasswordRequest": { type: t["./modules/auth/dto/auth.dto"].CheckResetPasswordRequestDto } } }], [import("./modules/i18n/i18n.controller"), { "I18nController": { "getTranslation": { type: Object } } }], [import("./core/health/health.controller"), { "HealthController": { "check": { type: Object } } }], [import("./modules/apps/apps.controller"), { "AppsController": { "getInstalledApps": { type: t["./modules/apps/dto/app.dto"].MyAppsDto }, "getGuestApps": { type: t["./modules/apps/dto/app.dto"].GuestAppsDto }, "searchApps": { type: t["./modules/apps/dto/app.dto"].SearchAppsDto }, "getAppDetails": { type: t["./modules/apps/dto/app.dto"].AppDetailsDto }, "getImage": {} } }], [import("./modules/backups/backups.controller"), { "BackupsController": { "backupApp": {}, "restoreAppBackup": {}, "getAppBackups": { type: t["./modules/backups/dto/backups.dto"].GetAppBackupsDto }, "deleteAppBackup": {} } }], [import("./modules/repos/repos.controller"), { "ReposController": { "pull": { type: t["./modules/repos/dto/repos.dto"].PullDto } } }], [import("./modules/app-lifecycle/app-lifecycle.controller"), { "AppLifecycleController": { "installApp": {}, "startApp": {}, "stopApp": {}, "restartApp": {}, "uninstallApp": {}, "resetApp": {} } }], [import("./modules/links/links.controller"), { "LinksController": { "getLinks": { type: t["./modules/links/dto/links.dto"].LinksDto }, "createLink": {}, "editLink": {}, "deleteLink": {} } }], [import("./modules/system/system.controller"), { "SystemController": { "systemLoad": { type: t["./modules/system/dto/system.dto"].LoadDto }, "downloadLocalCertificate": {} } }]] } };
};