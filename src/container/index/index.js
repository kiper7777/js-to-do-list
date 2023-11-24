export class Todo {
  static #list = []
  static #count = 0

  static #createTaskData = (text) => {
    this.#list.push({
      id: ++this.#count,
      text,
      done: false,
    })
  }

  static #block = null
  static #template = null
  static #input = null
  static #button = null

  static init = () => {
    this.#template =
      document.getElementById(
        'task',
      ).content.firstElementChild

    // console.log(this.#template)

    this.#block = document.querySelector('.task__list')
    this.#input = document.querySelector('.form__input')
    this.#button = document.querySelector('.form__button')
    this.#button.onclick = this.#handleAdd
    this.#render()

    // console.log(
    //   this.#block,
    //   this.#button,
    //   this.#input,
    //   this.#template,
    // )
  }

  static #handleAdd = () => {
    this.#createTaskData(this.#input.value)
    this.#input.value = ''
    this.#render()
    // console.log(this.#list)
  }

  static #render = () => {
    this.#block.innerHTML = ''

    if (this.#list.length === 0) {
      this.#block.innerText = `Список задач пустий`
    } else {
      this.#list.forEach((taskData) => {
        const el = this.#createTaskElem.cloneNode(taskData)
        this.#block.append(el)
      })
    }
  }

  static #createTaskElem = (data) => {
    const el = this.#template.cloneNode(true)

    const [id, text, btnDo, btnCancel] = el.children

    id.innerText = `${data.id}.`
    text.innerText = data.text

    return el
  }
}

Todo.init()
window.todo = Todo
