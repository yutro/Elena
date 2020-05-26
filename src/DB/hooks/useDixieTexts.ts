import { useEffect } from 'react'
import { Optional } from 'utility-types'
import { Db, Text, TextsList } from '../index'
import { useArray } from 'react-hanger/array'

type useDixieTextsPut = (textContent: Text['content']) => void
type useDixieTextsActions = {
  put: useDixieTextsPut
  remove: (id: Text['id']) => Promise<void>
}

export const useDixieTexts = (): [TextsList, useDixieTextsActions] => {
  const [texts, textsActions] = useArray<Text>([])

  useEffect(() => {
    Db.texts.toArray().then((textsList) => textsActions.setValue(textsList))
  }, [])

  const put: useDixieTextsPut = async (textContent: Text['content']) => {
    const textItem: Optional<Text, 'id'> = {
      content: textContent,
      deckIds: [0],
    }

    const id = await Db.texts.put(textItem as Text)

    textsActions.push({ id, ...textItem })

    return id
  }

  const remove = async (id: NonNullable<Text['id']>) => {
    await Db.texts.delete(id)
    textsActions.removeById(id)
  }

  return [texts, { put, remove }]
}
