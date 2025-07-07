class Conductor {
    private _nombres: string;
    private _apellidos: string;
    private _telefono: string;
    private _tipo_licencia: string;
    private _fecha_vencimiento_licencia: string; // Tipo string en formato 'YYYY-MM-DD',
    private _password: string;
    private _email: string;
    constructor(
        nombres: string,
        apellidos: string,
        telefono: string,
        tipo_licencia: string,
        fecha_vencimiento_licencia: string,
        contrasena: string,
        correo:string
    ) {
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._telefono = telefono;
        this._tipo_licencia = tipo_licencia;
        this._fecha_vencimiento_licencia = fecha_vencimiento_licencia;
        this._password = contrasena;
        this._email = correo
    }

    // Getters
    get nombres(): string {
        return this._nombres;
    }

    get apellidos(): string {
        return this._apellidos;
    }

    get telefono(): string {
        return this._telefono;
    }

    get tipo_licencia(): string {
        return this._tipo_licencia;
    }

    get fecha_vencimiento_licencia(): string{
        return this._fecha_vencimiento_licencia;
    }

    get password(): string {
        return this._password;
    }

    get email(): string {
        return this._email;
    }

    // Setters
    set nombres(value: string) {
        this._nombres = value;
    }

    set apellidos(value: string) {
        this._apellidos = value;
    }

    set telefono(value: string) {
        this._telefono = value;
    }

    set tipo_licencia(value: string) {
        this._tipo_licencia = value;
    }

    set fecha_vencimiento_licencia(value: string) {
        this._fecha_vencimiento_licencia = value;
    }

     set password(value: string) {
        this._password = value;
    }

     set email(value: string) {
        this._email = value;
    }

}

export default Conductor;
