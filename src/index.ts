import {
  FirstNameOptions,
  getFirstnameDataset,
  getLastnameDataset,
} from "./datasets";
import { createRandomNameGenerator } from "./name";

const lastNameGenerator = createRandomNameGenerator(getLastnameDataset());

/**
 *
 * @returns A random weighted last name from Finnish open data
 */
export function lastName(): string {
  return lastNameGenerator();
}

/**
 *
 * @param options
 * @returns a random weighted first name from Finnish open data
 */
export function firstname(options: FirstNameOptions): string {
  const finalOptions = {
    ...options,
    firstNamesOnly: false,
  };

  const creator = createRandomNameGenerator(getFirstnameDataset(finalOptions));
  return creator();
}
