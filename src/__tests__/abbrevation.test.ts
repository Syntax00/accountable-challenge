import { describe, expect, it } from "@jest/globals";

import { getItemAbbreviation } from "../utilities/helpers";

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
