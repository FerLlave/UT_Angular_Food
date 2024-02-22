import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { Food } from '../shared/food.model';
import { FoodService } from '../shared/food.service';



@Component({
  selector: 'app-form-food',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, ReactiveFormsModule, MatButton],
  templateUrl: './form-food.component.html',
  styleUrl: './form-food.component.scss'
})


export class FormFoodComponent {

    form = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    image: ['', [Validators.required]],
    category: ['', [Validators.required]],
    price: [, [Validators.required, Validators.min(1)]]


  });

  constructor(private formBuilder: FormBuilder, public servicioComida: FoodService) {}

  public sendData() {
    //validando formulario
    if (this.form.status == 'VALID') {
      //validando cada dato
      if (this.name?.value && this.description?.value && this.category?.value && this.image?.value && this.price?.value) {

        let price = parseInt(this.price.value);

        //creando el objeto
        let comida: Food = {

          name: this.name.value,
          description: this.description.value,
          category: this.category?.value,
          image: this.image?.value,
          price: price
        };

        //imprimiendo
        console.log(comida);
        
        this.servicioComida.addFood(comida);
        console.log(this.servicioComida.getAllFoods());

      }

    }

  }

  get name() {
    return this.form.get('name');
  }

  get description() {
    return this.form.get('description');
  }

  get image() {
    return this.form.get('image');
  }

  get category() {
    return this.form.get('category');
  }

  get price() {
    return this.form.get('price');
  }

}


