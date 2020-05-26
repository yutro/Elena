import { Db } from '../DB'
import { getSelectedText } from '../utils'
import { WordsCatcher } from './WordsCatcher'

const catcher = new WordsCatcher()

catcher.onSelect(async (text) => {
  if (text) {
    if (!(await Db.texts.where('content').equalsIgnoreCase(text).count())) {
      const answer = confirm(`add text "${text}" to Elena's incoming?`)

      if (answer) {
        await Db.texts.put({ content: text })
        alert(`text "${text}" added`)
        catcher.unMount()
      }
    } else {
      alert(`text "${text}" already added`)
      catcher.unMount()
    }
  }
})

window.addEventListener('mouseup', (event) => {
  const mouseEvent = event as MouseEvent
  const selection = window.getSelection()

  if (selection?.focusNode?.nodeName === '#text') {
    const selectedText = getSelectedText(selection)

    if (selectedText?.length) {
      if (!catcher.isMounted()) {
        catcher.mount()
      }

      catcher.setText(selectedText)

      if (mouseEvent.target !== catcher.getAddToInboxBtn()) {
        catcher.setPosition(mouseEvent.clientY, mouseEvent.screenX)
      }
    } else {
      if (catcher.isMounted()) {
        catcher.unMount()
      }
    }
  } else {
    if (catcher.isMounted()) {
      catcher.unMount()
    }
  }
})
