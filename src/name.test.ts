import { expect, describe, it } from "vitest";
import { createRandomNameGenerator } from "./name";

describe("firstname generator", () => {
  it("always returns Mikko if Mikko is the only available name", () => {
    const generator = createRandomNameGenerator([
      { name: "Mikko", count: 1 },
      { name: "Miihkali", count: 0 },
    ]);

    const results = Array(1000)
      .fill(0)
      .map(() => generator());

    expect(results).toContain("Mikko");
    expect(results).not.toContain("Miihkali");
  });

  it("might sometimes also return something else than Mikko", () => {
    const generator = createRandomNameGenerator([
      { name: "Mikko", count: 100 },
      { name: "Miihkali", count: 10 },
      { name: "Kikkeloora", count: 10 },
    ]);

    const results = Array(100000)
      .fill(0)
      .map(() => generator());

    expect(results).toContain("Mikko");
    expect(results).toContain("Miihkali");
    expect(results).toContain("Kikkeloora");

    expect(results.filter((name) => name === "Mikko").length).toBeGreaterThan(
      results.filter((name) => name === "Miihkali").length
    );
  });
});
