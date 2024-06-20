import { Controller } from '@hotwired/stimulus'

export default class extends Controller {

  connect() {
    console.log('Hello from remove_item_controller.js')
  }

  remove() {
    this.element.remove();
  }
}