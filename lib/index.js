import { Application } from '@hotwired/stimulus';
import AddItemController from './controllers/add_item_controller.js';
import RemoveItemController from './controllers/remove_item_controller.js';

window.Stimulus = Application.start()
window.Stimulus.register("add-item", AddItemController);
window.Stimulus.register("remove-item", RemoveItemController);

// ///////////
// Pseudocode
// ///////////

// CAT
// 1. Controller, 2. Action, 3. Target

// Add item
// ///////////

// 1. (C) Build the controller file ✅
// 2. (C) Import and register the controllers ✅
// 3. (C) Add data-controller to the right HTML element ✅
// 4. (A) Add data-action to the HTML button (click) ✅
// 5. (A) Add a method for this action in the controller ✅
// 6. (T) Setup a target for input (data-xx-target, setup static targets, and use the target) ✅
// 7. (T) Setup a target for the list ✅
// 8. Find input target value
// 9. Insert the input value in a li HTML card, and add this li to the list

// Remove item
// ///////////

// 1. (C) Build the controller file ✅
// 2. (C) Import and register the controllers ✅
// 3. (C) Add data-controller to the right HTML element ✅