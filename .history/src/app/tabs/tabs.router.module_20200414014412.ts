import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'category',
                children: [
                  {
                    path: '',
                    loadChildren: '../category/category.module#CategoryPageModule'
                  },
                  {
                    path: 'category-details',
                    loadChildren: '../category/category-details/category-details.module#CategoryDetailsPageModule'
                  },
                  {
                    path: 'bb',
                    loadChildren: '../category/bb/bb.module#BbPageModule'
                  },
                  {
                    path: 'aa',
                    loadChildren: '../category/aa/aa.module#AaPageModule'
                  }
                ]
            },
            {
                path: 'searsh-bar',
                children: [
                  {
                    path: '',
                    loadChildren: '../searsh-bar/searsh-bar.module#SearshBarPageModule'
                  },
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
