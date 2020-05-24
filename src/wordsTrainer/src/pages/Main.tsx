import React, { FunctionComponent } from 'react'
import { useDixieDecks } from '../../../DB/hooks'
import { Add } from '../components/add'

export const Main: FunctionComponent = () => {
  const [decks, decksActions] = useDixieDecks()

  return (
    <div className="min-h-screen bg-teal-800 text-teal-800 flex justify-center items-center">
      <section className="bg-white shadow rounded p-1">
        <header className="border-b border-teal-800">
          <h1 className="p-2">Decks</h1>
        </header>
        <main className="p-2">
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
        </main>
      </section>
    </div>
  )
}
