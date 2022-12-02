/**
 * Capture the input values
 * 
 * Display them on the page
 * 
 * Bonus dont allow duplicate items
 * 
 *  
 */

// Constructor
// ----------------------------------------------------

class ShoppingList {
    constructor() {
        //  Shopping List Arr
        // ----------------------------------------------------
        this.shoppingListArr = [];

        // Gain Access to these Elements
        // ----------------------------------------------------
        this.form = document.getElementById('form');
        this.foodItem = document.getElementById('foodItem');
        this.itemQuantity = document.getElementById('itemQuantity');
        this.itemPrice = document.getElementById('itemPrice');
        this.button = document.getElementById('button')
        this.groceryCards = document.getElementById('groceryCards')
        this.flexRadioDefault = document.querySelector('input[name=flexRadioDefault]').value;
        this.radio = document.querySelector('input[type=radio]:checked')
        this.result = document.getElementById('result')
    }

    // INIT
    // ----------------------------------------------------
    init() {
        this.formSubmit();
    }

    // Call Form Submit Calls
    // ----------------------------------------------------
    
    formSubmit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            // console.log('click');
            this.addFoodItems();
            this.foodType();
        })
    }
    
    foodType() {
        let result = document.querySelector('p')
        let selected = document.querySelector('input[type="radio"]:checked');
        result.innerText = selected.parentElement.textContent;

    }

    // Add Food Items
    // ----------------------------------------------------
    addFoodItems() {
        // console.log(this.result)
        let found = false;
        // console.log('test')
        console.log(this.foodItem.value);
        console.log('You have ' + this.itemQuantity.value +' '+ this.foodItem.value +' In your cart');
        console.log('$' + this.itemPrice.value);

        this.shoppingListArr.forEach(item => {
            if (item.toLowerCase() === this.foodItem.value.toLowerCase()){
                found = true;
            }
        })



        

        // Card Attempt 
        // ----------------------------------------------------
        if(!found) {
            // console.log(this.foodItem);
            this.groceryCards.innerHTML += `
            ${'Selected Food:  ' + this.foodItem.value}, 
            ${'You have  ' + this.itemQuantity.value + ' ' + this.foodItem.value +' in your Cart!  '}, $${this.itemPrice.value +'.00'}</p>
            `;
            this.shoppingListArr.push(this.foodItem.value);
            this.foodItem.value = '';
        }
        
    }


}

// Calling Methods
// ----------------------------------------------------
let action = new ShoppingList();
action.init();

