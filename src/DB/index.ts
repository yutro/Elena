import Dixie from 'dexie'
import { extId } from '../consts'

interface Word {
  id?: number
  text: string
  description?: string
}

const dbConfig = {
  name: extId,
  version: 1,
}

class DataBase extends Dixie {
  words: Dixie.Table<Word, number>

  constructor() {
    super(dbConfig.name)

    this.version(dbConfig.version).stores({
      words: '++id, text, description',
    })

    this.words = this.table('words')
  }

  addWord(word: Word): Promise<number> {
    return this.words.put(word)
  }

  getWord(key: keyof Word, value: string): Promise<Word> {
    return this.words.where(key).equalsIgnoreCase(value).first()
  }

  async hasWord(key: keyof Word, value: string): Promise<boolean> {
    try {
      const word = await this.getWord(key, value)

      return Boolean(word)
    } catch (e) {
      console.log('dixie error:', e)
      return false
    }
  }
}

const Db = new DataBase()

export { Db }
