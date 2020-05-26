import React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'
import { Main, Inbox, Decks } from './src/pages'

render(
  <Router>
    <Main path="/" />
    <Inbox path="inbox" />
    <Decks path="decks" />
  </Router>,
  document.getElementById('ext-elena-words-trainer')
)
