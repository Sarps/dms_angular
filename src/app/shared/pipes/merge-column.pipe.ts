import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'mergeColumn'
})
export class MergeColumnPipe implements PipeTransform {

    transform(value: any, cols: any): any {
        return {
            ...value,
            columns: cols
        };
    }

}
