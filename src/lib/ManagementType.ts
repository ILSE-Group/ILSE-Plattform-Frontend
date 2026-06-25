
export const UserManagementType = {
    ADD: 0,
    DELETE: 1,
    PASSWORD_RESET: 2,
} as const;

export const AccountManagementType = {
    CHANGE_PROFILE_ICON: 0,
    CHANGE_PASSWORD: 1,
    DELETE_ACCOUNT: 2,
} as const;