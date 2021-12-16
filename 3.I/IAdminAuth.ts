export interface IAdminAuth {
    checkPassword(password: string): boolean;
    resetPassword();
}
