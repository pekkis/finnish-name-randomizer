import Chooser from "./weighted-randomizer.js";

export type NameData = {
  name: string;
  count: number;
};

export function createRandomNameGenerator(dataset: NameData[]) {
  const randomFirstname = (): string => {
    const chosen = Chooser.chooseWeightedObject(dataset, "count") as NameData;

    return chosen.name;
  };

  return randomFirstname;
}
