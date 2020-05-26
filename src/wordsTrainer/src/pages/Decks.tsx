import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router'
import { DecksList } from '../components/deckList/DecksList'

import { NavigationLayout } from '../layouts'

export const Decks: FunctionComponent<RouteComponentProps> = () => (
  <NavigationLayout>
    <DecksList />
  </NavigationLayout>
)
