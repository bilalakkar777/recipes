import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { FiredataService } from '../services/firedata/firedata.service';
import { Recipe } from '../model/recipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
  loadedRecipe: Recipe[];
  listedLoadedRecipe: Recipe[];
  relevantRecipe: Recipe[];
  isLoading = false;

  recipes: Recipe[] = [];
  textbar = '';
  rate : number = 0;


  private RecipeSub: Subscription;

  constructor(
  private router: Router,
  private FiredataService: FiredataService,
    private menuCtrl: MenuController,
  ) {
      this.RecipeSub = this.FiredataService.recipes.subscribe(rec => {
      this.recipes = rec;
      this.relevantRecipe = this.recipes;
      this.listedLoadedRecipe = this.relevantRecipe.slice(1);
    });
  }


  ngOnInit() {
    this.RecipeSub = this.FiredataService.recipes.subscribe(rec => {
      this.loadedRecipe = rec;
      this.recipes = this.loadedRecipe;
      this.listedLoadedRecipe = this.relevantRecipe.slice(1);
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.FiredataService.fetchRecipes().subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    if (this.RecipeSub) {
      this.RecipeSub.unsubscribe();
    }
  }
  
  viewCard(Recipe: Recipe) {
    this.router.navigate([
        'recipes',
        Recipe.id
    ], {
            state: { Recipe }
        });
}



}
