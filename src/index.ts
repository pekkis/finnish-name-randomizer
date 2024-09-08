import {
  FirstNameOptions,
  getFirstnameDataset,
  getLastnameDataset,
} from "./datasets";
import { createRandomNameGenerator } from "./name";

const lastNameGenerator = createRandomNameGenerator(getLastnameDataset());
export function lastName(): string {
  return lastNameGenerator();
}

export function firstname(options: FirstNameOptions): string {
  const finalOptions = {
    ...options,
    firstNamesOnly: false,
  };

  const creator = createRandomNameGenerator(getFirstnameDataset(finalOptions));
  return creator();
}
