import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu: Food[] = [
    {
      id: 1,
      name: 'pizza',
      description: 'Hawaian',
      category: 'food',
      image: 'https://www.losllanos.mx/wp-content/uploads/2023/06/Pizza_hawaiana_los_llanos.jpg',
      price: 250,

    },
    {
      id: 2,
      name: 'Pizza',
      description: 'Pepperoni',
      category: 'food',
      image: 'https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg',
      price: 250,

    },

    {
      id: 3,
      name: 'Coffee',
      description: 'Americano',
      category: 'drink',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QopmmoQSGiuK8SGP6wrGydl8xryf_aiPtg&usqp=CAU',
      price: 35,

    },
    {
      id: 4,
      name: 'Flavored Water',
      description: 'Jamaica',
      category: 'drink',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_ceYEQXj3-hz0uprUGSSTrZFVVUoBQs8_w&usqp=CAU',
      price: 35,

    },

    {
      id: 5,
      name: 'Cake',
      description: 'Chocolate',
      category: 'food',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudhyECbp_7qN_VJLLSZKy-hJxU-vXkwiIAQ&usqp=CAU',
      price: 40,

    },
    {
      id: 6,
      name: 'Coffee',
      description: 'Capuccino',
      category: 'drink',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg',
      price: 40,

    },
    {
      id: 7,
      name: 'Coffee',
      description: 'Capuccino',
      category: 'drink',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg',
      price: 40,

    },
    {
      id: 8,
      name: 'Coffee',
      description: 'Capuccino',
      category: 'drink',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg',
      price: 40,

    },


  ];


  constructor() {

  }


  public getAllFoods(): Food[] {
    return this.menu;

  }

  // esta funcion regresa una comida
  public getOne(id: number): Food | undefined {
    return this.menu.find(food => food.id === id);
  }

  public addFood(food: Food) {
    this.menu.push(food);

  }

  public updateFood(newFood: Food) {
    this.menu.forEach((item, index) => {

      if (item.id == newFood.id) {
        this.menu [index] = newFood;
      }
    });

  }

  public deleteFood(deletefood: Food) {
    console.log(this.menu.length);
      this.menu.forEach((food, index) => {
      if (food.id == deletefood.id) {
        this.menu.splice(index, 1);
        console.log(this.menu.length);
      }
    });

  }



}

