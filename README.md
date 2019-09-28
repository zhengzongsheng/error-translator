# Error-Translator
Translate the error text into different languages

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
| language  | The word want to translate. |

> Note: If no language is specified, the language will be Chinese.

## Language Code
You can check it in [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (ISO 639-1)

