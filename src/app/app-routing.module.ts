import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
    path: '', loadChildren: './tabs/tabs.module#TabsPageModule'
},
{
    path: 'recipes/:id',
    loadChildren: './recipes/recipes.module#RecipesPageModule'
},

/*
{
  path: 'category-details',
  loadChildren: './category/category-details/category-details.module#CategoryDetailsPageModule'
},
{
  path: 'bb',
  loadChildren: './category/bb/bb.module#BbPageModule'
},
*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
