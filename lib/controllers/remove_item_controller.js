  import { Controller } from 'stimulus'
  
  export default class extends Controller {
  
    connect() {
      console.log("Remove item controller ON!")
    }

    remove() {
      console.log("remove!")
      this.element.remove()
    }
  }