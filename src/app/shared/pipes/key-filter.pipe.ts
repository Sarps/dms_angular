import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'keyFilter'
})
export class KeyFilterPipe implements PipeTransform {

    transform(data: Array<any>, key: string, value: any): Array<any> {
        return data.filter(d => d[key] === value);
    }

}
