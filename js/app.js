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
        this.radio = document.querySelector('.form-check-input');
        this.foodItem = document.getElementById('foodItem');
        this.itemCount = document.getElementById('itemCount');
        this.itemPrice = document.getElementById('itemPrice');
        this.button = document.getElementById('button')
    }

    // INIT
    // ----------------------------------------------------
    init() {
        this.formSubmit();
    }

    // Call Form Submit Calls
    // ----------------------------------------------------
    formSubmit() {
        this.form.addEventListener('change', (e) => {
            e.preventDefault();
            console.log('.form-check-input')
        })

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            // console.log('click');
            this.addFoodItems();
        })
    }

    // Add Food Items
    // ----------------------------------------------------
    addFoodItems() {
        let found = false;
        // console.log('test')
        console.log(this.foodItem.value);
        console.log('You have ' + this.itemCount.value +' '+ this.foodItem.value +' In your cart');
        console.log('$' + this.itemPrice.value);

        this.shoppingListArr.forEach(item => {
            if (item.toLowerCase() === this.foodItem.value.toLowerCase()){
                found = true;
            }
        })

        if(!found) {
            console.log(this.foodItem);
            this.foodItem.innerHTML += `
            <li class="dropdown-item">${this.foodItem.value, this.itemCount.value, this.itemPrice.value}</li>
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

