import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule,MatSelectModule,
            FormControl,FormGroup,ReactiveFormsModule,Validators,MatButton],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})

export class FormFoodComponent {

}

