class Auth {
    private _id_admin: number;
    private _password: string
    constructor(
        id_admin: string,
        password: string
    ) {
        this._id_admin = id_admin;
        this._password = password;
    }
    // Getters
    get id_admin(): string {
        return this._id_admin;
    }

    get password(): string {
        return this._password;
    }

    // Setters
    set id_admin(id_admin: string) {
        this._id_admin = id_admin;
    }

    set password(password: string) {
        this._password = password;
    }

}

export default Auth;