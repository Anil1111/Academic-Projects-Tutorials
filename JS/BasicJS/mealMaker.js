const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;      
  },
  get desserts() {
    return this._courses.desserts;      
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  }, 
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);    
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const i = Math.floor(Math.random() * dishes.length);
    return dishes[i];
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price;
    return `The appetizer name is ${appetizers.name} & The mains name is ${mains.name} & The desserts name is ${desserts.name} & The total price is ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'soup', 23);
menu.addDishToCourse('appetizers', 'noodle', 45);
menu.addDishToCourse('appetizers', 'maggi', 17);

menu.addDishToCourse('mains', 'fried rice', 210);
menu.addDishToCourse('mains', 'fried noodle', 250);
menu.addDishToCourse('mains', 'chicken', 270);

menu.addDishToCourse('desserts', 'ice cream', 60);
menu.addDishToCourse('desserts', 'jamun', 70);
menu.addDishToCourse('desserts', 'berries', 80);
// console.log(menu.courses);

const meal = menu.generateRandomMeal();
console.log(meal);