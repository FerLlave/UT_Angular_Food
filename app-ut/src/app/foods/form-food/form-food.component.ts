import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-form-food',
  standalone: true,
  imports:[MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule,ReactiveFormsModule,MatButton],
  templateUrl:'./form-food.component.html',
  styleUrl:'./form-food.component.scss'
})


export class FormFoodComponent{

    form = this.formBuilder.group({
    name:['', [Validators.required]],
    description:['', [Validators.required, Validators.minLength(20)]],
    image:['', [Validators.required]],
    category:['',[Validators.required]],
    price:[,[Validators.required,Validators.min(1)]]


  })

  constructor(private formBuilder:FormBuilder){

  }

  get name(){
    return this.form.get('name');
  }
  
  get description(){
    return this.form.get('description');
  }

  get image(){
    return this.form.get('image');
  }

  get category(){
    return this.form.get('category');
  }

  get price(){
    return this.form.get('price');
  }

}

/*
export class FormFoodComponent {

  foodForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),

  });


}
*/
