import { getSelectedText } from '../utils'
import { WordsCatcher } from './WordsCatcher'

const catcher = new WordsCatcher()

catcher.onSelect((text) => {
  console.log('-----9----', text)
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
