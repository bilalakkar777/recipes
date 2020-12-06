import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Router } from '@angular/router';
import { CategoryDetailsPage } from './category-details/category-details.page';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})

export class CategoryPage implements OnInit {

   Text1: string = 'mok';
  Recipes: Recipe[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
   }

   viewCard(Recipe: Recipe) {
    this.router.navigate([
        'tabs/category/category-details',
    ], {
            state: { Recipe }
        });
     }

     viewCard2(Recipe: Recipe) {
      this.router.navigate([
          'tabs/category/bb',
      ], {
              state: { Recipe }
          });
       }

       viewCard3(Recipe: Recipe) {
        this.router.navigate([
            'tabs/category/aa',
        ], {
                state: { Recipe }
            });
         }

}
