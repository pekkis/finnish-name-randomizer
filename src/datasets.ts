import menAll from "./data/miehet-kaikki.json";
import menFirst from "./data/miehet-ens.json";

import womenAll from "./data/naiset-kaikki.json";
import womenFirst from "./data/naiset-ens.json";

import lastNames from "./data/sukunimet.json";
import { NameData } from "./name";

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
