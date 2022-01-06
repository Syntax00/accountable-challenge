import { describe, expect, it } from "@jest/globals";

import {
  getItemAbbreviation,
  getItemById,
  getParentsItems,
  removeItemById,
} from "../utilities/helpers";

const inputList = [
  {
    question: "Do you know Metal music ?",
    title: "Chinese Chongqing Dog",
    description: "A Chinese Chongqing Dog likes Rock",
    __id__: "34bd9c89-704a-4f80-bb86-edb3ef1259d9",
    __pId__: null,
    searchableText:
      "Chinese Chongqing Dog A Chinese Chongqing Dog likes Rock Saint Bernard A Saint Bernard likes Pop Bluetick Coonhound A Bluetick Coonhound likes Metal Villano de Las Encartaciones A Villano de Las Encartaciones likes Latin",
  },
  {
    title: "Koolie",
    description: "A Koolie likes Latin",
    __id__: "63e37ffb-2aa1-415d-a58d-b57832d72946",
    __pId__: null,
    searchableText:
      "Koolie A Koolie likes Latin Lagotto Romagnolo A Lagotto Romagnolo likes Stage And Screen Tornjak A Tornjak likes Latin",
  },
  {
    id: "e2144a3b-bf2f-4eef-adc6-ffa2f10a6c7f",
    title: "Lagotto Romagnolo",
    description: "A Lagotto Romagnolo likes Stage And Screen",
    displayName: "Lagotto Romagnolo",
    __id__: "0e5572d2-4213-4946-8740-94eebb2567e8",
    __pId__: "63e37ffb-2aa1-415d-a58d-b57832d72946",
    searchableText:
      "Lagotto Romagnolo A Lagotto Romagnolo likes Stage And Screen",
  },
  {
    id: "ec6ee5ee-57f2-4846-baed-3216c801d06e",
    title: "King Charles Spaniel",
    description: "A King Charles Spaniel likes Latin",
    displayName: "King Charles Spaniel",
    __id__: "964db7fa-36da-4ceb-b00d-a23a7f1999c8",
    __pId__: null,
    searchableText: "King Charles Spaniel A King Charles Spaniel likes Latin",
  },
];

describe("Find Item with ID Functionality", () => {
  it("should get the item with the corresponding id parameter", () => {
    const inputID = "ec6ee5ee-57f2-4846-baed-3216c801d06e";
    const output = "King Charles Spaniel";

    expect(getItemById(inputList, inputID)?.title).toContain(output);
  });

  it("should return nothing (undefined) when provided with an item ID that is not in the list", () => {
    const inputID = "test-nonexistent-id";

    expect(getItemById(inputList, inputID)).toBeUndefined();
  });
});

describe("Remove Item from List Functionality", () => {
  it("should not remove from or change the list when an invalid ID is provided", () => {
    const inputID = "invalid-id";
    const output = inputList;

    expect(removeItemById(inputList, inputID)).toStrictEqual(output);
  });

  it("should return an empty array and does not crash when provided with nothing/undefined as list", () => {
    const inputID = "invalid-id";
    const output: [] = [];

    expect(removeItemById(undefined, inputID)).toEqual(output);
  });

  it("should remove the item from the list when the ID is valid and exists in the list", () => {
    const inputID = "e2144a3b-bf2f-4eef-adc6-ffa2f10a6c7f";
    const output = inputList.length - 1;

    expect(removeItemById(inputList, inputID)).toHaveLength(output);
  });

  it("should not include the removed item in the list no more", () => {
    const inputID = "e2144a3b-bf2f-4eef-adc6-ffa2f10a6c7f";

    expect(
      getItemById(removeItemById(inputList, inputID), inputID)
    ).toBeUndefined();
  });
});

describe("Get Parents Items Functionality", () => {
  it("should return all the number of parents (heads) items in a Tree Flat List", () => {
    const output = 3;

    expect(getParentsItems(inputList)).toHaveLength(output);
  });

  it("should extract the correct parents items", () => {
    const output = [
      "34bd9c89-704a-4f80-bb86-edb3ef1259d9",
      "63e37ffb-2aa1-415d-a58d-b57832d72946",
      "964db7fa-36da-4ceb-b00d-a23a7f1999c8",
    ];

    expect(
      getParentsItems(inputList).map((item: ListItemType) => item.__id__)
    ).toStrictEqual(output);
  });

  it("should return an empty array when there is no parents in the list", () => {
    const inputListWithNoParents = [
      {
        id: "e2144a3b-bf2f-4eef-adc6-ffa2f10a6c7f",
        title: "Lagotto Romagnolo",
        description: "A Lagotto Romagnolo likes Stage And Screen",
        displayName: "Lagotto Romagnolo",
        __id__: "0e5572d2-4213-4946-8740-94eebb2567e8",
        __pId__: "63e37ffb-2aa1-415d-a58d-b57832d72946",
        searchableText:
          "Lagotto Romagnolo A Lagotto Romagnolo likes Stage And Screen",
      },
    ];
    const output = 0;

    expect(getParentsItems(inputListWithNoParents)).toHaveLength(output);
  });
});

describe("Abbreviation Function", () => {
  it("should return empty string when provided an empty string as input", () => {
    const inputString = "";
    const output = "";

    expect(getItemAbbreviation(inputString)).toBe(output);
  });

  it("should return empty string when provided with undefined/no parameters as an input and doesn't crash", () => {
    const output = "";

    expect(getItemAbbreviation()).toBe(output);
  });

  it("should return the first letter only when the input is the only one word", () => {
    const inputString = "Test";
    const output = "T";

    expect(getItemAbbreviation(inputString)).toBe(output);
  });

  it("should return the first letter as UPPERCASE even when the input is lowercase", () => {
    const inputString = "test";
    const output = "T";

    expect(getItemAbbreviation(inputString)).toBe(output);
  });

  it("should return the first two letter (UPPERCASE) when provided with two words string as an input", () => {
    const inputString = "Test function";
    const output = "TF";

    expect(getItemAbbreviation(inputString)).toBe(output);
  });

  it("should return the first two letter (UPPERCASE) when provided with more than two words as input", () => {
    const inputString = "Test more than two words functionality";
    const output = "TM";

    expect(getItemAbbreviation(inputString)).toBe(output);
  });
});
