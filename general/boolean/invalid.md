# Boolean - Invalid

`general.boolean.invalid`

**Severity:** error

## Description

The value provided is not a valid boolean. The field expects either `true` or `false`, but received a different value.

## What triggers this error

This error is triggered by the language server when a value that should be a boolean fails boolean validation. Common causes include:

- Providing a string like `"true"` or `"yes"` instead of the boolean literal `true`
- Providing a number (e.g., `1` or `0`) instead of `true` or `false`
- Providing `null` where a boolean is required

## Example

The following JSON triggers the error because the value is a string instead of a boolean:

```jsonc
{
  "minecraft:breathable": {
    "breathes_air": "true"  // Invalid — should be boolean true, not string "true"
  }
}
```

Or using a number instead of boolean:

```jsonc
{
  "minecraft:breathable": {
    "breathes_air": 1  // Invalid — should be true or false
  }
}
```

## How to fix

Use the boolean literals `true` or `false` (without quotes):

```jsonc
{
  "minecraft:breathable": {
    "breathes_air": true
  }
}
```

Valid boolean values are `true` and `false`.

## Related errors

- [general.string.invalid](../string/invalid.md)
- [general.integer.invalid](../integer/invalid.md)