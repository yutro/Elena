import Dixie from 'dexie'
import { extId } from '../consts'

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

interface Deck {
  id?: ID
  name: string
  values: ReadonlyArray<ID>
}

const dbConfig = {
  name: extId,
  version: 1,
}

class DataBase extends Dixie {
  texts: Dixie.Table<Text, number>
  settings: Dixie.Table<Setting, number>
  decks: Dixie.Table<Deck, number>

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
