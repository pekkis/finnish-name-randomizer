import {
  type FirstNameOptions,
  getFirstnameDataset,
  getLastnameDataset,
} from "./datasets.ts";
import { createRandomNameGenerator } from "./name.ts";

const lastNameGenerator = createRandomNameGenerator(getLastnameDataset());

/**
 * Generates a random first name from Finnish open data
 *
 * @returns A random weighted last name from Finnish open data
 */
export function randomLastName(): string {
  return lastNameGenerator();
}

/**
 * Generates a random first name from Finnish open data
 *
 * @param {FirstNameOptions} options Options for the first name generator
 * @returns a random weighted first name from Finnish open data
 */
export function randomFirstName(options: FirstNameOptions): string {
  const finalOptions = {
    ...options,
    firstNamesOnly: false,
  };

  const creator = createRandomNameGenerator(getFirstnameDataset(finalOptions));
  return creator();
}
