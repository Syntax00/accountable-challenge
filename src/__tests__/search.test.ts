import { describe, expect, it } from "@jest/globals";

import {
  getItemSearchableText,
  searchInString,
  searchItems,
} from "../utilities/helpers";

describe("Generate Item Searchable Text Function", () => {
  it("should return an empty string when provided with empty values values as parameters and doesn't crash", () => {
    const inputItem = {
      title: "",
      description: "",
      searchableText: "",
    };
    const searchableTextOutput = getItemSearchableText(inputItem);

    expect(searchableTextOutput).toContain("");
  });

  it("should return the correct concatenation of item title and description as searchable text", () => {
    const inputItem = {
      title: "Styrian Coarse-haired Hound",
      description: "A Styrian Coarse-haired Hound likes Stage And Screen",
      searchableText: "",
    };
    const searchableTextOutput = getItemSearchableText(inputItem);

    expect(searchableTextOutput).toContain(
      "Styrian Coarse-haired Hound A Styrian Coarse-haired Hound likes Stage And Screen"
    );
  });
});

describe("Search in String with a Term Function", () => {
  const searchItemInput = {
    title: "Item title",
    description: "Item description",
    searchableText: "A Grand Bleu de Gascogne likes Metal",
  };

  it("should match when receives null/undefined/empty string as an input to search in the item searchable text and doesn't crash", () => {
    const searchResult = searchInString()(searchItemInput);

    expect(searchResult).toBe(true);
  });

  it("should match when provided with a term that is included in the item searchable text", () => {
    const termInput = "scogne li";
    const searchResult = searchInString(termInput)(searchItemInput);

    expect(searchResult).toBe(true);
  });

  it("should not match (return false) when provided with a term that is not included in the item searchable text", () => {
    const termInput = "shouldn't match";
    const searchResult = searchInString(termInput)(searchItemInput);

    expect(searchResult).toBe(false);
  });

  it("should be case-insensitive and successfully match different lowercase and uppercase term and searchable text", () => {
    const termInput = "bleu de gASCogne LIKES metal";
    const searchResult = searchInString(termInput)(searchItemInput);

    expect(searchResult).toBe(true);
  });
});

describe("Search in List Items Functionality", () => {
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

  it("should return the exact number of items that have the search term in their searchable text", () => {
    const inputSearchTerm = "lagotto";
    const searchResultOutput = searchItems(inputList, inputSearchTerm);

    expect(searchResultOutput).toHaveLength(2);
  });

  it("should return all the list items when provided with empty string as input", () => {
    const inputSearchTerm = "";
    const searchResultOutput = searchItems(inputList, inputSearchTerm);

    expect(searchResultOutput).toHaveLength(4);
  });

  it("should find the correct items", () => {
    const inputSearchTerm = "lagotto";
    const searchResultOutput = searchItems(inputList, inputSearchTerm).map(
      (item: ListItemType) => item.__id__
    );

    expect(searchResultOutput).toStrictEqual([
      "63e37ffb-2aa1-415d-a58d-b57832d72946",
      "0e5572d2-4213-4946-8740-94eebb2567e8",
    ]);
  });
});
