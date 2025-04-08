class admin{
    private _id_admin: number;
    private _nombre: string;
    private _apellidos: string;
    private _perfil : string;
   

    constructors(
        id_admin : number, 
        perfil : string,
       
    ){
        this._id_admin = id_admin;
        this._perfil = perfil;
       
    }

    // Getters
    get id_admin(): number {
        return this._id_admin;
    }

    get nombre(): string {
        return this._nombre;
    }
    get apellidos(): string {
        return this._apellidos;
    }
   

    get perfil(): string {
        return this._perfil;
    }


    // Setters
    set id_admin(id_admin: number) {
        this._id_admin = id_admin;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }
    

    set perfil(perfil: string) {
        this._perfil = perfil;
    }

   
}

export default admin;