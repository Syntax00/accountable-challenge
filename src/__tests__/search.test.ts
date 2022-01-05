import { describe, expect, it } from "@jest/globals";

import { getItemSearchableText, searchInString } from "../utilities/helpers";

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
