import { Input, Component, OnInit } from '@angular/core';
import { Location } from '../../model/location';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
})
export class ViewsComponent implements OnInit {

    @Input() Recipes: Recipe[];

    sliderOpts = {
        centeredSlides: true,
        loop: true,
        loopedSlides: 1,
        slidesPerView: 'auto',
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        spaceBetween: 20
    };

    constructor(private router: Router) { }

    ngOnInit() {
        this.sliderOpts.loopedSlides = this.Recipes.length;
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
