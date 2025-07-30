export namespace NewMaquina {
    export type Args = {
        name: string,
        tipo: string
    }
}       

export namespace UpdateMaquina {
    export type Args = {
        id: string,
        name: string,
        tipo: string
    }
}  

export namespace DeleteMaquina {
    export type Args = {
        id: string,
    }
}  