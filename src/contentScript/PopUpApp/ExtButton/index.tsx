import React, { ButtonHTMLAttributes, FunctionComponent, useState } from 'react'
import { ImageInboxIconBase64, ImageLogoIconBase64 } from '../../../consts'

export const ExtButton: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const [isActive, setActiveState] = useState<boolean>(false)

  return (
    <button
      type="button"
      {...props}
      onMouseEnter={(): void => setActiveState(true)}
      onMouseLeave={(): void => setActiveState(false)}
    >
      {isActive ? (
        <img src={ImageInboxIconBase64} alt="Elena inbox icon" width={30} className="rounded" />
      ) : (
        <img src={ImageLogoIconBase64} alt="Elena extension logo icon" width={30} className="rounded" />
      )}
    </button>
  )
}
