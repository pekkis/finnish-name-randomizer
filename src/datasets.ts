import menAll from "./data/miehet-kaikki.json" with { type: "json" };
import menFirst from "./data/miehet-ens.json" with { type: "json" };

import womenAll from "./data/naiset-kaikki.json" with { type: "json" };
import womenFirst from "./data/naiset-ens.json" with { type: "json" };

import lastNames from "./data/sukunimet.json" with { type: "json" };
import type { NameData } from "./name.ts";

export type FirstNameOptions = {
  sex: "male" | "female";
  firstNamesOnly?: boolean;
};

export function getLastnameDataset(): NameData[] {
  return lastNames;
}

export function getFirstnameDataset(options: FirstNameOptions): NameData[] {
  if (!options.firstNamesOnly && options.sex === "male") {
    return menAll;
  }

  if (!options.firstNamesOnly && options.sex === "female") {
    return womenAll;
  }

  if (options.firstNamesOnly && options.sex === "female") {
    return womenFirst;
  }

  return menFirst;
}
