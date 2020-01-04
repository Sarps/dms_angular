import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IdPadPipe} from './id-pad.pipe';
import { KeyFilterPipe } from './key-filter.pipe';

@NgModule({
    declarations: [
        IdPadPipe,
        KeyFilterPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        IdPadPipe,
        KeyFilterPipe
    ]
})
export class PipesModule {
}
