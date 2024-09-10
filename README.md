# Finnish name randomizer

Generates random Finnish surnames and firstnames, weighted randomly
on the actual commonness of the names based on the open data on the subject.

I created the library for creation of realistic huge datasets of semi-realistic
fake Finnish person data for teaching SQL and databases. Results were as expected!

## Data source

* https://www.avoindata.fi/data/fi/dataset/none

## Examples

### Firstnames

Firstnames are categorized, like in the source name, with a binary `sex` parameter,
either `male` or `female`.

Use `firstNamesOnly` to get a dataset considering only the FIRST first names.
If you do not use this, you will get a lot more Kalevis and Tapanis than you
usually meet, since these are much more usual as second first names.

```js

import {randomFirstName} from 'jsr:@pekkis/finnish-name-randomizer'

const result = randomFirstName({
  sex: "male",
  firstNamesOnly: true,
});
```

### Lastnames

There is no categorization or differentiated datasets. Very simple.

```js

import {randomLastName} from 'jsr:@pekkis/finnish-name-randomizer'

const result = randomLastName({
  sex: "male",
  firstNamesOnly: true,
});
```

