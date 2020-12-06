import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CategoriesComponent } from './categories/categories.component';
import { ViewsComponent } from './views/views.component';
import { HeadingComponent } from './heading/heading.component';
import { CardComponent } from './card/card.component';
import { StarRatingComponent } from './star-rating/star-rating.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        CategoriesComponent,
        ViewsComponent,
        HeadingComponent,
        CardComponent,
        StarRatingComponent

    ],
    exports: [
        CommonModule,
        IonicModule,
        CategoriesComponent,
        ViewsComponent,
        HeadingComponent,
        CardComponent,
        StarRatingComponent
 
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
