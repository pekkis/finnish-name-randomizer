import { expect, describe, it } from "vitest";
import { randomFirstName, randomLastName } from "./index";

describe("name generator", () => {
  it("returns a female first name", () => {
    const result = randomFirstName({
      sex: "female",
      firstNamesOnly: true,
    });

    expect(result).toBeTypeOf("string");
  });

  it("returns a male first name", () => {
    const result = randomFirstName({
      sex: "male",
      firstNamesOnly: true,
    });

    expect(result).toBeTypeOf("string");
  });

  it("returns a last name", () => {
    const result = randomLastName();
    expect(result).toBeTypeOf("string");
  });
});
