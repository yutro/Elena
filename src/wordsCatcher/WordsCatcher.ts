export class WordsCatcher {
  id: string
  container: HTMLElement
  addToInboxBtn: HTMLButtonElement
  text: string | null

  constructor() {
    this.text = null
    this.id = 'ext-elena'
    this.container = document.body

    this.addToInboxBtn = document.createElement('button')
    this.addToInboxBtn.id = this.id
    this.addToInboxBtn.textContent = 'E'
  }

  setPosition(top: number, left: number) {
    this.addToInboxBtn.style.setProperty('top', `${window.pageYOffset + top + 15}px`)
    this.addToInboxBtn.style.setProperty('left', `${left + 15}px`)
  }

  isMounted(): boolean {
    return this.container.contains(this.addToInboxBtn)
  }

  mount() {
    this.container.appendChild(this.addToInboxBtn)
  }

  unMount = () => {
    this.addToInboxBtn.remove()
  }

  getAddToInboxBtn() {
    return this.addToInboxBtn
  }

  getText() {
    return this.text
  }

  setText(text: string) {
    this.text = text
  }

  onSelect(callback: (text: string | null) => void) {
    this.addToInboxBtn.addEventListener('click', () => {
      callback(this.text)
    })
  }
}
