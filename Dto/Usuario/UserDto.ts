class User {
    
    private _email: string;
    private _nombres: string;
    private _apellidos: string;
    private _direccion: string;
    private _password: string;

    constructor(
        email: string, nombres: string,
        apellidos: string, direccion: string,
        password: string
    ) {
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._direccion = direccion;
        this._password = password
    }

    // Getters
    get email(): string {
        return this._email;
    }

    get nombres(): string {
        return this._nombres;
    }

    get apellidos(): string {
        return this._apellidos;
    }

    get direccion(): string {
        return this._direccion;
    }

    get password(): string {
        return this._password;
    }

    // Setters
    set email(email: string) {
        this._email = email;
    }

    set nombres(nombres: string) {
        this._nombres = nombres;
    }

    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }

    set direccion(direccion: string) {
        this._direccion = direccion;
    }

    set password(password: string) {
        this._password = password;
    }
}

export default User;