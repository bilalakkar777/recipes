import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Location } from '../../model/location';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() Recipe: Recipe;

  constructor(
      private element: ElementRef) { }

  ngOnInit() {
      this.element.nativeElement.style.setProperty('--background-image', `url(${this.Recipe.coverPhotoUrl})`);
  }


  toggleLiked(event) {
      event.preventDefault();
      event.stopPropagation();
      this.Recipe.liked = !this.Recipe.liked;
  }

  get likedIcon() {
      if (this.Recipe.liked) {
          return 'star';
      }
      return 'star-outline';
  }

}
