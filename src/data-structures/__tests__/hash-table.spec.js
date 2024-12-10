import {equal} from "node:assert";
import {HashTable} from "../hash-table.js";

describe("hash-table", () => {

  it("set and get nominal case", () => {
    const hashTable = new HashTable()
    hashTable.set("first", 0)
    hashTable.set("first", 1)
    hashTable.set("second", 2)

    equal(hashTable.get("first"), 1);
    equal(hashTable.get("second"), 2);
    equal(hashTable.get("third"), null);
  });

});