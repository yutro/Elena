import { getSelectedText } from '@elena:utils'
import { ModalWindow } from './ModalWindow'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { useBoolean, UseBooleanActions } from 'react-hanger/array'
import { DataContext } from './handlers'

const useDisplayPopUpApp = (): [boolean, UseBooleanActions, RefObject<HTMLDivElement>] => {
  const popUpElementNode = useRef<HTMLDivElement>(null)
  const [isActive, isActiveActions] = useBoolean(false)

  const handleClick: EventListener = ({ target }) => {
    if (target && !popUpElementNode.current?.contains(target as HTMLElement)) {
      if (isActive) {
        return isActiveActions.setFalse()
      }
    }
  }
  const handleDblClick: EventListener = (e) => {
    if (popUpElementNode.current) {
      const { clientX, clientY, target } = e as MouseEvent
      const clickedElement = target as HTMLElement

      const { current: container } = popUpElementNode

      container.style.setProperty('left', `${clientX}px`)
      container.style.setProperty('top', `${clientY + window.pageYOffset}px`)

      isActiveActions.setTrue()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    document.addEventListener('dblclick', handleDblClick)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('dblclick', handleDblClick)
    }
  })

  return [isActive, isActiveActions, popUpElementNode]
}

export const PopUpApp = () => {
  const [isActive, displayActions, refNode] = useDisplayPopUpApp()

  const [text, setText] = useState<string>('')

  const selectTextHandler: EventListener = ({ target }) => {
    const selection = window.getSelection()

    if (selection) {
      const selectedText = getSelectedText(selection)

      if (selectedText) {
        setText(selectedText)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('dblclick', selectTextHandler)
    return () => window.removeEventListener('dblclick', selectTextHandler)
  })

  return (
    <div ref={refNode} className="absolute mt-5 ml-4">
      {isActive ? (
        <DataContext.Provider
          value={{
            text,
            displayPopUp: (val: boolean) => displayActions.setValue(val),
          }}
        >
          <ModalWindow />
        </DataContext.Provider>
      ) : null}
    </div>
  )
}
