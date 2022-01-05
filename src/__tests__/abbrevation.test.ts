import { describe, expect, it } from "@jest/globals";

import { getItemAbbreviation } from "../utilities/helpers";

describe("Abbreviation Function", () => {
  it("should return empty string when provided an empty string as input", () => {
    const abbrev = getItemAbbreviation("");
    const output = "";

    expect(abbrev).toBe(output);
  });

  it("should return empty string when provided with undefined/no parameters as an input and doesn't crash", () => {
    const abbrev = getItemAbbreviation();
    const output = "";

    expect(abbrev).toBe(output);
  });

  it("should return the first letter only when the input is the only one word", () => {
    const abbrev = getItemAbbreviation("Test");
    const output = "T";

    expect(abbrev).toBe(output);
  });

  it("should return the first letter as UPPERCASE even when the input is lowercase", () => {
    const abbrev = getItemAbbreviation("test");
    const output = "T";

    expect(abbrev).toBe(output);
  });

  it("should return the first two letter (UPPERCASE) when provided with two words string as an input", () => {
    const abbrev = getItemAbbreviation("Test function");
    const output = "TF";

    expect(abbrev).toBe(output);
  });

  it("should return the first two letter (UPPERCASE) when provided with more than two words as input", () => {
    const abbrev = getItemAbbreviation(
      "Test more than two words functionality"
    );
    const output = "TM";

    expect(abbrev).toBe(output);
  });
});
