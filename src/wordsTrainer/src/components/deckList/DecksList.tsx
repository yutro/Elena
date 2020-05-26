import React from 'react'
import { useDixieDecks } from '../../../../DB/hooks'
import { Add } from '../add'

export const DecksList = () => {
  const [decks, decksActions] = useDixieDecks()

  return (
    <ul>
      {decks.map(({ id, name, textsIds }) => (
        <li key={id}>
          <section role="texts deck" className="rounded shadow p-5 my-3 flex justify-between">
            <h2 role="deck title">{name}</h2>
            <div className="flex">
              <span role="deck items count">{textsIds.length}</span>
              <button className="gg-remove-r ml-3 hover:text-red-500" onClick={() => decksActions.remove(id)} />
            </div>
          </section>
        </li>
      ))}

      <li className="shadow rounded p-5 bg-gray-100">
        <Add label="Create deck" onSubmit={decksActions.put} />
      </li>
    </ul>
  )
}
