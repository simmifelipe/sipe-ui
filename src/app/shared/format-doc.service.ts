import { Injectable } from '@angular/core';

@Injectable()
export class FormatDocService {

    DECIMAL_SEPARATOR = '.';
    GROUP_SEPARATOR = ',';

    valor_puro: any;
    maskedId: any;
    val: any;
    v: any;

    private cpf_mask(v): any {
        v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
        v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
        // de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos
        return v;
    }

    private cnpj(v): any {
        v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
        v = v.replace(/^(\d{2})(\d)/, '$1.$2'); // Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); // Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/\.(\d{3})(\d)/, '.$1/$2'); // Coloca uma barra entre o oitavo e o nono dígitos
        v = v.replace(/(\d{4})(\d)/, '$1-$2'); // Coloca um hífen depois do bloco de quatro dígitos
        return v;
    }

    format(valString) {
        if (!valString) {
            return '';
        }
        const val = valString.toString();
        const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
        this.valor_puro = parts;
        if (parts[0].length <= 11) {
            this.maskedId = this.cpf_mask(parts[0]);
            return this.maskedId;
        } else {
            this.maskedId = this.cnpj(parts[0]);
            return this.maskedId;
        }
    }

    unFormat(val) {
        if (!val) {
            return '';
        }
        val = val.replace(/\D/g, '');

        if (this.GROUP_SEPARATOR === ',') {
            return val.replace(/,/g, '');
        } else {
            return val.replace(/\./g, '');
        }
    }

    getValorPuro() {
        return this.valor_puro;
    }

}
