# Error-Translator
Translate the error text into different languages

## Features

![one](.\img\one.png)



![two](.\img\two.png)

## Installation

```bash
npm install error-translator
```

## Usage

```javascript
// The parameter can be a language name
const errorTranslator = require('error-translator')('zh');
```

## Parameters

```typescript
function translate(language: string)
```

| parameter | description                 |
| --------- | --------------------------- |
| language  | Translated language.        |

> Note: If no language is specified, the language will be Chinese.

## Language Code
You can check it in [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (ISO 639-1)

