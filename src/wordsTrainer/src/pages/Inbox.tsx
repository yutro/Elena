import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDixieTexts } from '../../../DB/hooks/useDixieTexts'

import { NavigationLayout } from '../layouts'

export const Inbox: FunctionComponent<RouteComponentProps> = () => {
  const [texts] = useDixieTexts()

  return (
    <NavigationLayout>
      {texts
        .filter(({ deckIds }) => deckIds.includes(0))
        .map(({ id, content, description }) => {
          return (
            <div key={id}>
              <span>{content}</span>
              <p>{description}</p>
            </div>
          )
        })}
    </NavigationLayout>
  )
}
