import React, { FunctionComponent, useEffect, useState } from 'react'
import { Maybe } from '../../@types'
import { getSelectedText } from '../../utils'
import { ModalWindow } from './ModalWindow'

export const PopUpApp: FunctionComponent = () => {
  const [containerPosition, setContainerPosition] = useState<[number, number]>()
  const [selectedText, setSelectedText] = useState<string>()

  const mouseUpClickHandler: EventListener = (event) => {
    const selection = window.getSelection()

    if (selection) {
      const selectedText = getSelectedText(selection)

      if (selectedText) {
        setSelectedText(selectedText)
        const textContainer = selection.focusNode?.parentNode as Maybe<HTMLElement>
        const { clientY, clientX } = event as MouseEvent

        if (textContainer) {
          const clickOffsetLeftInsideTextContainer = clientX - textContainer.offsetLeft
          const clickOffsetTop = window.pageYOffset + clientY

          setContainerPosition([clickOffsetTop, clickOffsetLeftInsideTextContainer])
        }
      } else {
        setContainerPosition(undefined)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', mouseUpClickHandler)

    return (): void => {
      window.removeEventListener('mouseup', mouseUpClickHandler)
    }
  }, [])

  if (!containerPosition || !selectedText) {
    return null
  }

  const [top, left] = containerPosition

  const setHidden = (): void => {
    setContainerPosition(undefined)
  }

  return (
    <div className="absolute mt-3 ml-4" style={{ top: `${top}px`, left: `${left}px` }}>
      <ModalWindow closePopUp={setHidden} selectedText={selectedText} />
    </div>
  )
}
