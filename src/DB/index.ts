import { extId } from "@elena:consts";
import Dixie from "dexie";

interface IWord {
  id?: number;
  text: string;
  description?: string
}

const dbConfig = {
  name: extId,
  version: 1,
};

class DataBase extends Dixie {
  words: Dixie.Table<IWord, number>;

  constructor() {
    super(dbConfig.name);

    this.version(dbConfig.version).stores({
      words: "++id, text, description",
    });

    this.words = this.table("words");
  }

  addWord(word: IWord) {
    return this.words.put(word);
  }
}

const Db = new DataBase();

export { Db };
