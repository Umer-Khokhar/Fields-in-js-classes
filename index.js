class pizza {
    // public and privates fields must be assign above the constructor function
    // public field syntax
    crust = "original"
    // private field syntax (start with the hashtag)
    #topping = ["mashrooms", "olives"]
    // #size; if you want to make the this.size private field
    constructor(pizzaSize) {
        this.size = pizzaSize
    }
    hereWeGo() {
      return `Baking the ${this.size} pizza with the topping of ${this.#topping[0]} and ${this.#topping[1]} with the ${this.crust} curst`
    }
}
const myPizza = new pizza("large")
console.log(myPizza.hereWeGo())
// public field can be access able out side of class 
 console.log(myPizza.crust)
 // private field can not be accessable outside of class (new alternative to factory function) return undefined;
 console.log(myPizza.topping)
//  console.log(myPizza.#topping) throw syntax error