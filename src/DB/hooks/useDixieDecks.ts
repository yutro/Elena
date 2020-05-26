import { useEffect } from 'react'
import { Optional } from 'utility-types'
import { Db, Deck, DeckList } from '../index'
import { useArray } from 'react-hanger/array'

type useDixieDecksPut = (deckName: Deck['name']) => void
type useDixieDecksActions = {
  put: useDixieDecksPut
  remove: (id: Deck['id']) => Promise<void>
}

export const useDixieDecks = (): [DeckList, useDixieDecksActions] => {
  const [decks, decksActions] = useArray<Deck>([])

  useEffect(() => {
    Db.decks.toArray().then((decksList) => decksActions.setValue(decksList as DeckList))
  }, [])

  const put: useDixieDecksPut = async (name: Deck['name']) => {
    const deckItem: Optional<Deck, 'id'> = {
      name,
      textsIds: [],
    }

    const id = await Db.decks.put(deckItem)

    decksActions.push({ id, ...deckItem })

    return id
  }

  const remove = async (id: Deck['id']) => {
    await Db.decks.delete(id)
    decksActions.removeById(id)
  }

  return [decks, { put, remove }]
}
