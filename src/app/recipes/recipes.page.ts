import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NavController,
  ModalController,
  ActionSheetController,
  LoadingController,
  AlertController
} from '@ionic/angular';
import { Subscription } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { FiredataService } from '../services/firedata/firedata.service';
import { Recipe } from '../model/recipe';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AdmobService } from '../services/admob/admob.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  
  recipe: Recipe;
  isLoading = false;
  rate : number = 0;
  private recipeSub: Subscription;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private firedataService: FiredataService,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router: Router,
    private iab: InAppBrowser,
    private admobFreeService: AdmobService,
      ) {}
  

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/recipes');
        return;
      }
      this.isLoading = true;
      this.recipeSub = this.firedataService
        .getRecipe(paramMap.get('id'))
        .subscribe(
          rec => {
            this.recipe = rec;
            this.isLoading = false;
            this.rate = rec.star;

          },
          error => {
            this.alertCtrl
              .create({
                header: 'An error ocurred!',
                message: 'Could not load recipe.',
                buttons: [
                  {
                    text: 'Okay',
                    handler: () => {
                      this.router.navigate(['/recipes']);
                    }
                  }
                ]
              })
              .then(alertEl => alertEl.present());
          }
        );
    });
  }

  

  ngOnDestroy() {
    if (this.recipeSub) {
      this.recipeSub.unsubscribe();
    }
  }
  
  slideOpts = {
    autoplay: {
      delay: 2000,
    },
    zoom: false,
    effect: 'flip'
  };


   link()
   {
    const browser = this.iab.create('https://play.google.com/store/search?q=%22healthy%20tagine%22&c=apps');
     browser.show(), browser.close()
   }

   showInterstitial(){
    this.admobFreeService.InterstitialAd();
  }
  

}
