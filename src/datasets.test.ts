import { expect, describe, it } from "vitest";
import { getFirstnameDataset } from "./datasets";

describe("datasets", () => {
  it("female firstname datasets dont include Mikko", () => {
    const dataset1 = getFirstnameDataset({
      sex: "female",
      firstNamesOnly: true,
    });

    const dataset2 = getFirstnameDataset({
      sex: "female",
      firstNamesOnly: false,
    });

    const names1 = dataset1.map((name) => name.name);
    const names2 = dataset2.map((name) => name.name);

    expect(names1).not.toContain("Mikko");
    expect(names2).not.toContain("Mikko");
  });

  it("male firstname datasets dont include Niina", () => {
    const dataset1 = getFirstnameDataset({
      sex: "male",
      firstNamesOnly: true,
    });

    const dataset2 = getFirstnameDataset({
      sex: "male",
      firstNamesOnly: false,
    });

    const names1 = dataset1.map((name) => name.name);
    const names2 = dataset2.map((name) => name.name);

    expect(names1).not.toContain("Niina");
    expect(names2).not.toContain("Niina");
  });
});
