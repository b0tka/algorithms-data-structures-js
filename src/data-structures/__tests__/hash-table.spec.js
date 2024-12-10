import {deepEqual, equal} from "node:assert";
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

  it("keys nominal case", () => {
    const hashTable = new HashTable()
    hashTable.set("a", 0)
    hashTable.set("b", 1)
    hashTable.set("c", 2)
    hashTable.set("d", 2)

    deepEqual(hashTable.keys(), ["a", "b", "c", "d"])
  });

  it("keys nominal case", () => {
    const hashTable = new HashTable()
    hashTable.set("a", 0)
    hashTable.set("b", 1)
    hashTable.set("c", 2)
    hashTable.set("d", 2)

    deepEqual(hashTable.values(), [0, 1, 2, 2])
  });



});