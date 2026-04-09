# Integer - Invalid

`general.integer.invalid`

**Severity:** error

## Description

The value provided is not a valid integer. The field expects a whole number but received a value that cannot be interpreted as one — such as a decimal number, a string, or an empty value.

## What triggers this error

This error is triggered by the language server when a value that should be an integer fails integer validation. This includes:

- Providing a floating-point number (e.g., `1.5`) where a whole number is required
- Providing a non-numeric string where a number is expected
- Providing `null` or leaving the field empty when a number is required

## Example

The following JSON triggers the error because the value is a decimal where an integer is required:

```jsonc
{
  "minecraft:health": {
    "value": 10.5,  // Invalid — should be a whole number like 10
    "max": 20
  }
}
```

## How to fix

Replace the value with a valid whole number (integer). Integers cannot have decimal points:

```jsonc
{
  "minecraft:health": {
    "value": 10,
    "max": 20
  }
}
```

If you need a fractional value, check whether the field actually accepts a `float` type — some fields accept both integers and floats.

## Related errors

- [general.integer.minimum](minimum.md)
- [general.integer.maximum](maximum.md)
- [general.float.invalid](../float/invalid.md)
