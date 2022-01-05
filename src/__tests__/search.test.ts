import { describe, expect, it } from "@jest/globals";

import { searchInString } from "../utilities/helpers";

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
