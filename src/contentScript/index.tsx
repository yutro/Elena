import React from 'react'
import ReactDom from 'react-dom'
import './style.less'
import { extId } from '../consts'
import { PopUpApp } from './PopUpApp'

const container = document.createElement('div')
container.id = extId
document.body.appendChild(container)

ReactDom.render(<PopUpApp />, container)
