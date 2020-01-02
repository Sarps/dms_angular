import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'idPad'
})
export class IdPadPipe implements PipeTransform {

    transform(value: string | number, type: string, length?: number): any {
        length = length || 8;
        let valueStr: string = value.toString().substr(0, length - type.length);
        const zeroCount = length - (valueStr.length + type.length);
        for (let i = 0; i < zeroCount; i++) {
            valueStr = '0' + valueStr;
        }
        return type + valueStr;
    }

}
