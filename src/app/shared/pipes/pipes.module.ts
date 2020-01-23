import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IdPadPipe} from './id-pad.pipe';
import { KeyFilterPipe } from './key-filter.pipe';
import {MergeColumnPipe} from './merge-column.pipe';

@NgModule({
    declarations: [
        IdPadPipe,
        KeyFilterPipe,
        MergeColumnPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        IdPadPipe,
        KeyFilterPipe,
        MergeColumnPipe
    ]
})
export class PipesModule {
}
