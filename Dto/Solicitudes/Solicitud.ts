class Solicitudes{

    private _id_solicitud: number;
    private _zona: string;
    private _cantidad: number;
    private _tipo_residuo: string;
    private _tamaño: string;

    constructor(
        id_solicitud: number, zona: string,
        cantidad: number, tipo_residuo: string, 
        tamaño: string
    ){
        this._id_solicitud = id_solicitud;
        this._zona = zona;
        this._cantidad = cantidad;
        this._tipo_residuo = tipo_residuo;
        this._tamaño = tamaño;
    }

    get id_solicitud(): number {
        return this._id_solicitud;
    }

    get zona(): string {
        return this._zona;
    }

    get cantidad(): number {
        return this._cantidad;
    }

    get tipo_residuo(): string {
        return this._tipo_residuo;
    }

    get tamaño(): string {
        return this._tamaño;
    }

    set id_solicitud(id_solicitud: number) {
        this._id_solicitud = id_solicitud;
    }

    set zona(zona: string) {
        this._zona = zona;
    }

    set cantidad(cantidad: number) {
        this._cantidad = cantidad;
    }

    set tipo_residuo(tipo_residuo: string) {
        this._tipo_residuo = tipo_residuo;
    }

    set tamaño(tamaño: string) {
        this._tamaño = tamaño;
    }
}
export default Solicitudes;