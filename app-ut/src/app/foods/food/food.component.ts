import { Component,Input } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Food } from '../shared/food.model';


@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatCardModule,TitleCasePipe,CurrencyPipe],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {

  @Input() food?:Food;
  constructor(){

  }


}
