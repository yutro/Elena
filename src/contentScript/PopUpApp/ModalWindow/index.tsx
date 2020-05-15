import React, { FunctionComponent } from 'react'
import { ImageLogoIconBase64 } from '../../../consts'
import { Db } from '../../../DB'
import { ExtButton } from '../ExtButton'
import cogoToast from 'cogo-toast'

type ModalWindowProps = {
  closePopUp: Function
  selectedText: string
}

export const ModalWindow: FunctionComponent<ModalWindowProps> = ({ closePopUp, selectedText }) => {
  const extBtnClickHandler = async (): Promise<void> => {
    const text = selectedText.trim()

    if (!(await Db.hasWord('text', text))) {
      await Db.addWord({ text })
      cogoToast.loading(
        <div className="flex items-center">
          <img src={ImageLogoIconBase64} alt="elena extension icon image" />
          word <span className="font-bold p-1">{text}</span> added to inbox
        </div>,
        { position: 'bottom-right', hideAfter: 6 }
      )
    } else {
      cogoToast.info(
        <div className="flex items-center">
          <img src={ImageLogoIconBase64} alt="elena extension icon image" />
          word <span className="font-bold p-1">{text}</span> already exists :)
        </div>,
        { position: 'bottom-right', hideAfter: 6 }
      )
    }

    closePopUp(true)
  }

  return (
    <div>
      <ExtButton onClick={extBtnClickHandler} />
    </div>
  )
}
