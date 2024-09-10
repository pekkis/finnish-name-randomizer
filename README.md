# Finnish name randomizer

Generates random Finnish surnames and firstnames, weighted randomly
on the actual commonness of the names based on the open data on the subject.

I created the library for creation of realistic huge datasets of semi-realistic
fake Finnish person data for teaching SQL and databases. Results were as expected!

## Examples

### Firstnames

Firstnames are categorized, exactly as in the source data, with a binary `sex` parameter,
names are either `female` or `male`.

Use `firstNamesOnly` to get a dataset considering only the FIRST first names.
If you do not use this, you will get a lot more Kalevis and Tapanis than you
usually meet, since these are much more usual as second first names.

```js

import {randomFirstName} from 'jsr:@pekkis/finnish-name-randomizer'

const result = randomFirstName({
  sex: "female",
  firstNamesOnly: true,
}); // Niina or some other nice female name

const result = randomFirstName({
  sex: "female",
  firstNamesOnly: true,
}); // should be Mikko, if the computer chose wisely!

```

### Lastnames

There is no categorization or differentiated datasets. Very simple.

```js

import {randomLastName} from 'jsr:@pekkis/finnish-name-randomizer'

const result = randomLastName();
```

## Data source

The data source for the names is the Avoin Data by Digi- ja väestötietovirasto (DVV) published under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

The data has not been modified, at least not intentionally. I manually extracted CSV's out of the Excel files and JSON files out of the CSV's with code. The exact date of the dataset in this version of the randomizer library is `2024-08-05`. I plan to update this semi-monthly / annually and randomly publish new versions.

* https://www.avoindata.fi/data/fi/dataset/none

