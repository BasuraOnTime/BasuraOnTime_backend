class User {
    private _id_rol: number;
    private _email: string;
    private _nombres: string;
    private _apellidos: string;
    private _password: string;
    private _telefono: string;
<<<<<<< HEAD
    private _latitud: number;
    private _longitud: number;
=======
>>>>>>> 20b251c0ae9c6ce028c994851c8d1ce63796a62c

    constructor(
        id_rol: number, email: string, nombres: string,
        apellidos: string, 
        password: string,
<<<<<<< HEAD
        telefono: string,
        latitud: number,
        longitud: number
=======
        telefono: string
>>>>>>> 20b251c0ae9c6ce028c994851c8d1ce63796a62c
    ) {
        this._id_rol = id_rol;
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._password = password
        this._telefono = telefono;
<<<<<<< HEAD
        this._latitud = latitud;
        this._longitud = longitud;
=======
>>>>>>> 20b251c0ae9c6ce028c994851c8d1ce63796a62c
    }

    // Getters
    get id_rol(): number {
        return this._id_rol;
    }

    get email(): string {
        return this._email;
    }

    get nombres(): string {
        return this._nombres;
    }

    get apellidos(): string {
        return this._apellidos;
    }
    
    get telefono(): string {
        return this._telefono;
    }

    get password(): string {
        return this._password;
    }
<<<<<<< HEAD

    get latitud(): number {
        return this._latitud;
    }
    
    get longitud(): number {
        return this._longitud;
    }
    
=======
>>>>>>> 20b251c0ae9c6ce028c994851c8d1ce63796a62c
    
    // Setters
    set id_rol(id_rol: number) {
        this._id_rol = id_rol;
    }

    set email(email: string) {
        this._email = email;
    }

    set nombres(nombres: string) {
        this._nombres = nombres;
    }

    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }
<<<<<<< HEAD

    set telefono(telefono: string) {
        this._telefono = telefono;
    }

=======
    set telefono(telefono: string) {
        this._telefono = telefono;
    }
>>>>>>> 20b251c0ae9c6ce028c994851c8d1ce63796a62c
    set password(password: string) {
        this._password = password;
    }

    set latitud(latitud: number) {
        this._latitud = latitud;
    }
    
    set longitud(longitud: number) {
        this._longitud = longitud;
    }
}

export default User;