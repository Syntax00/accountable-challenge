import { describe, expect, it } from "@jest/globals";

import { getItemById } from "../utilities/helpers";

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
