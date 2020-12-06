import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsComponent } from './tabs.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        TabsPageRoutingModule,
        HttpClientModule
    ],
    declarations: [TabsComponent]
})
export class TabsPageModule { }
