import Dixie from 'dexie'
import { Optional } from 'utility-types'

type ID = number

interface Text {
  id?: ID
  content: string
  description?: string
  status: 'active' | 'archived'
  deckId?: ID
}

interface Setting {
  id?: ID
  name: string
  value: string | boolean
}

export type Deck = {
  id: ID
  name: string
  textsIds: ReadonlyArray<ID>
}

export type DeckList = Array<Deck>

const dbConfig = {
  name: 'ext-elena',
  version: 1,
}

class DataBase extends Dixie {
  texts: Dixie.Table<Text, number>
  settings: Dixie.Table<Setting, number>
  decks: Dixie.Table<Optional<Deck, 'id'>, number>

  constructor() {
    super(dbConfig.name)

    this.version(dbConfig.version).stores({
      texts: '++id, content, description, status, deckId',
      settings: '++id, name, value',
      decks: '++id, name, textsIds',
    })

    this.texts = this.table('texts')
    this.settings = this.table('settings')
    this.decks = this.table('decks')
  }

  textsCollection() {
    return this.texts
  }

  settingsCollection() {
    return this.settings
  }

  decksCollection() {
    return this.decks
  }
}

const Db = new DataBase()

export { Db }
