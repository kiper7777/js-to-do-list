export class Todo {
  static #block = null
  static #template = null
  static #input = null
  static #button = null

  static init = () => {
    this.#template = document.getElementById('task')

    console.log(this.#template.content.firstElementChild)
  }
}

Todo.init()

window.todo = Todo
