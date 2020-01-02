import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IdPadPipe} from './id-pad.pipe';

@NgModule({
    declarations: [
        IdPadPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        IdPadPipe
    ]
})
export class PipesModule {
}
