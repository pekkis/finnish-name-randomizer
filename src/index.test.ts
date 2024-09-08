import { expect, describe, it } from "vitest";
import { firstname, lastName } from "./index";

describe("name generator", () => {
  it("returns a female first name", () => {
    const result = firstname({
      sex: "female",
      firstNamesOnly: true,
    });

    expect(result).toBeTypeOf("string");
  });

  it("returns a male first name", () => {
    const result = firstname({
      sex: "male",
      firstNamesOnly: true,
    });

    expect(result).toBeTypeOf("string");
  });

  it("returns a last name", () => {
    const result = lastName();
    expect(result).toBeTypeOf("string");
  });
});
