import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { Recipe } from '../../model/recipe';
 
interface RecipesData {

  title: string,
  description: string,
  category: string,
  Ingredients: string,
  Procedure: string,
  avg: number,
  star: number,
  coverPhotoUrl: string,
  maidIMG: string,
  liked: boolean,
  tips: string,
  kal: string,
  fat: string, 
  timecook: boolean,
  timeprep: string
}


@Injectable({
  providedIn: 'root'
})
export class FiredataService {

  private _recipes = new BehaviorSubject<Recipe[]>([]);

  get recipes() {
    return this._recipes.asObservable();
  }


  constructor(private http: HttpClient) { }

  fetchRecipes() {
    return this.http
      .get<{ [key: string]: RecipesData}>(
        '---'//firebase realtime database
      )
      .pipe(
        map(resData => {
          const recipes = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              recipes.push(
                new Recipe(
                 key,
                 resData[key].title,
                 // resData[key].short_description,
                 resData[key].description,
                 resData[key].category,
                 resData[key].Ingredients,
                 resData[key].Procedure,
                 resData[key].avg,
                 resData[key].star,
                 resData[key].coverPhotoUrl,
                 resData[key].maidIMG,
                 resData[key].liked,
                 resData[key].tips,
                 resData[key].kal,
                 resData[key].fat,
                 resData[key].timecook,
                 resData[key].timeprep,
                )
              );
            }
          }
          return recipes;
          // return [];
        }),
        tap(recipes => {
          this._recipes.next(recipes);
        })
      );
  }

  getRecipe(id: string) {
    return this.http
      .get<RecipesData>(
        `---/recipes/${id}.json`//firebase realtime database

      )
      .pipe(
        map(recipeData => {
          return new Recipe(
            id,
            recipeData.title,
            recipeData.description,
            recipeData.category,
            recipeData.Ingredients,
            recipeData.Procedure,
            recipeData.avg,
            recipeData.star,
            recipeData.coverPhotoUrl,
            recipeData.maidIMG,
            recipeData.liked,
            recipeData.tips,
            recipeData.kal,
            recipeData.fat,
            recipeData.timecook,
            recipeData.timeprep,
          );
        })
      );
  }

}
