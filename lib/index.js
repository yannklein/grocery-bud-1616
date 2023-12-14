import { Application } from 'stimulus';
import AddItemController from "./controllers/add_item_controller.js";
import RemoveItemController from "./controllers/remove_item_controller.js";

window.Stimulus = Application.start()
window.Stimulus.register("add-item", AddItemController)
window.Stimulus.register("remove-item", RemoveItemController)

// ///////////
// Pseudocode
// ///////////

// CAT
// Controller, Action, Target

// Add item
// ///////////

// 1. initialize stimulus controller ✅
// 2. add data-controller into the HTML ✅
// 3. add a submit data-action to the HTML form ✅
// 4. create the corresponding method in the controller ✅
// 5. target input and the ul ✅
// 6. display the item card using the input.value ✅
// 7. Refactor by using the data within the form ✅

// Remove item
// ///////////

// 1. initialize stimulus controller ✅
// 2. add data-controller into the HTML ✅
// 3. add a click data-action on the remove btn ✅
// 4. create the corresponding method in the controller ✅
// 5. remove the item card 