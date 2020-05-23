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
  }

  setPosition(top: number, left: number): void {
    this.addToInboxBtn.style.setProperty('top', `${window.pageYOffset + top + 15}px`)
    this.addToInboxBtn.style.setProperty('left', `${left + 15}px`)
  }

  isMounted(): boolean {
    return this.container.contains(this.addToInboxBtn)
  }

  mount(): void {
    this.container.appendChild(this.addToInboxBtn)
  }

  unMount = (): void => {
    this.addToInboxBtn.remove()
  }

  getAddToInboxBtn(): HTMLButtonElement {
    return this.addToInboxBtn
  }

  getText(): string | null {
    return this.text
  }

  setText(text: string): void {
    this.text = text
  }

  onSelect(callback: (text: string | null) => void): void {
    this.addToInboxBtn.addEventListener('click', () => {
      callback(this.text)
    })
  }
}
