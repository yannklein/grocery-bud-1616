import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'input', 'list' ]

  connect() {
    console.log('Hello from add_item_controller.js')
    console.log(this.inputTarget, this.listTarget)
  }

  add(event) {
    event.preventDefault()
    const itemName = this.inputTarget.value;
    const card = `
      <li data-controller="remove-item" class="list-group-item d-flex gap-3 align-items-center">
        <div>${itemName}</div>
        <button data-action="click->remove-item#remove" type="submit" class="btn btn-sm btn-light">❌ Remove</button>
      </li>`
    this.listTarget.insertAdjacentHTML("beforeend", card);
    this.inputTarget.value = "";
  }
}