import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import {SharedModules} from '../shared.module';
import { LoginRoutingModule } from './login.routing-module';
import {MaterialComponents} from '../materialcss.module';

@NgModule({
    declarations : [LoginComponent],
    exports : [],
    providers : [],
    imports : [CommonModule, SharedModules, LoginRoutingModule, MaterialComponents]
})

export class LoginModule {

}