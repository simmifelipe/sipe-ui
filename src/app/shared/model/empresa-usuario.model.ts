import { Modulo } from './modulo.model';
import { Empresa } from "./empresa.model";

export class EmpresaUsuario {

    codigo: number;
    empresa: Empresa;
    modulo: Modulo;
    nivel: number;

    constructor(
        codigo: number,
        empresa: Empresa,
        modulo: Modulo,
        nivel: number
    ) {
        this.codigo = codigo;
        this.empresa = empresa;
        this.modulo = modulo;
        this.nivel = nivel;
    }

}