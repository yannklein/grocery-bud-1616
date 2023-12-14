import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["input", "list"]
  connect() {
    console.log("Add item controller ON!")
  }

  // callback method
  add(event) {
    event.preventDefault()
    // const formSubmitted = event.currentTarget
    // console.log(formSubmitted.elements[0].value);
    console.log(this.inputTarget)
    console.log(this.listTarget)
    const card = `
      <li data-controller="remove-item" class="list-group-item d-flex gap-3 align-items-center">
        <div>${this.inputTarget.value}</div>
        <button data-action="click->remove-item#remove" type="submit" class="btn btn-sm btn-light">❌ Remove</button>
      </li> `
      this.listTarget.insertAdjacentHTML("afterbegin", card)
      this.inputTarget.value = "";
  }
}