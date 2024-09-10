import { expect } from "jsr:@std/expect";
import { randomFirstName, randomLastName } from "./index.ts";

Deno.test("returns a female first name", () => {
  const result = randomFirstName({
    sex: "female",
    firstNamesOnly: true,
  });

  expect(typeof result).toBe("string");
});

Deno.test("returns a male first name", () => {
  const result = randomFirstName({
    sex: "male",
    firstNamesOnly: true,
  });

  expect(typeof result).toBe("string");
});

Deno.test("returns a last name", () => {
  const result = randomLastName();
  expect(typeof result).toBe("string");
});
