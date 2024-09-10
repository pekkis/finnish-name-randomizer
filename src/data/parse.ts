import { parse } from "npm:csv-parse/sync";
import fs from "node:fs/promises";

import NumberParser from "npm:intl-number-parser";

console.log(NumberParser);

const parser = NumberParser("en-US");

const firstnameFiles = [
  "miehet-ens",
  "miehet-kaikki",
  "naiset-ens",
  "naiset-kaikki",
];

type FirstnameRecord = {
  Etunimi: string;
  Lukumäärä: string;
};

type LastnameRecord = {
  Sukunimi: string;
  Yhteensä: string;
};
const parseLastnameFile = async () => {
  const input = await fs.readFile(`./src/data/sukunimet.csv`, "utf8");
  const records: LastnameRecord[] = parse(input, {
    columns: true,
    skip_empty_lines: true,
    delimiter: [";", ","],
  });

  const data = records.map((record) => {
    return {
      name: record["Sukunimi"],
      count: parser(record["Yhteensä"]),
    };
  });

  return data;
};

const parseFirstnameFile = async (filename: string) => {
  const input = await fs.readFile(`./src/data/${filename}`, "utf8");

  const records: FirstnameRecord[] = parse(input, {
    columns: true,
    skip_empty_lines: true,
    delimiter: [";", ","],
  });

  const data = records.map((record) => {
    return {
      name: record["Etunimi"],
      count: parser(record["Lukumäärä"]),
    };
  });

  return data;
};

console.log("Parsing last names");

const lastnames = await parseLastnameFile();

await fs.writeFile(
  `./src/data/sukunimet.json`,
  JSON.stringify(lastnames, null, 2),
);

console.log("Parsing first names");

for (const filename of firstnameFiles) {
  console.log(`Parsing ${filename}`);

  const parsed = await parseFirstnameFile(`${filename}.csv`);

  console.log(`Saving ${filename}`);

  await fs.writeFile(
    `./src/data/${filename}.json`,
    JSON.stringify(parsed, null, 2),
  );
}
