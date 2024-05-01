# Invalid

`json.invalid`

When you encounter this error, it indicates that there is something wrong with the JSON structure. Below are some common mistakes that lead to invalid JSON and how to fix them.

Common JSON Errors

## 1. Missing Quotes Around Strings

JSON requires that all strings are enclosed in double quotes. Missing quotes will lead to a parsing error.

Example of invalid JSON:

```jsonc
{
  name: John Doe
}
```

Fix:

```jsonc
{
  "name": "John Doe"
}
```

## 2. Missing commas

Trailing commas are not allowed in JSON. Having a comma after the last key-value pair in an object or the last element in an array will cause an error.

Example of invalid JSON:

```jsonc
{
    "name": "John Doe"
    "age": 30,
}
```

Fix:

```jsonc
{
  "name": "John Doe",
  "age": 30
}
```

## 3. Trailing Commas

Trailing commas are not allowed in JSON. Having a comma after the last key-value pair in an object or the last element in an array will cause an error.

Example of invalid JSON:

```jsonc
{
  "name": "John Doe",
  "age": 30,
}
```

Fix:

```jsonc
{
  "name": "John Doe",
  "age": 30
}
```

## 4. Using Single Quotes

JSON does not support single quotes for strings. Strings must be enclosed in double quotes.

Example of invalid JSON:

```jsonc
{
  'name': 'John Doe'
}
```

Fix:

```jsonc
{
  "name": "John Doe"
}
```

## 5. Unescaped Characters

Certain characters in strings need to be escaped, such as backslashes, double quotes within strings, and control characters like newlines.

Example of invalid JSON:

```jsonc
{
    "text": "He said, "Hello, World!""
}
```

Fix:

```jsonc
{
  "text": "He said, \"Hello, World!\""
}
```

## 6. Incorrect Data Types

JSON only supports specific data types: `string`, `number`, `object`, `array`, `true`, `false`, and `null`. Using unsupported data types like undefined or functions will result in an error.

Example of invalid JSON:

```jsonc
{
  "value": undefined
}
```

Fix:

```jsonc
{
  "value": null
}
```

## 7. Nested Errors

Errors can also occur in nested structures if any of the above issues are present at any level of the JSON.

Example of invalid JSON:

```jsonc
{
  "user": {
    "name": "John Doe",
    "details": { "age": 30, "gender": "male", } // <-- trailing comma
  }
}
```

Fix:

```jsonc
{
  "user": {
    "name": "John Doe",
    "details": { "age": 30, "gender": "male" }
  }
}
```
