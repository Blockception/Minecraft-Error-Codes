# Float - Invalid

`general.float.invalid`

**Severity:** error

## Description

The value provided is not a valid floating-point number. The field expects a numeric value (which may include a decimal point) but received something that cannot be interpreted as a number.

## What triggers this error

This error is triggered by the language server when a value that should be a float (decimal number) fails numeric validation. This includes:

- Providing a non-numeric string where a number is expected
- Providing `null` or leaving the field empty when a number is required
- Using an invalid number format (e.g., multiple decimal points)

## Example

The following JSON triggers the error because the value is not a number:

```jsonc
{
  "minecraft:movement": {
    "value": "fast"  // Invalid — should be a number like 0.25
  }
}
```

## How to fix

Replace the value with a valid number. Float fields accept both whole numbers and decimal numbers:

```jsonc
{
  "minecraft:movement": {
    "value": 0.25
  }
}
```

## Related errors

- [general.float.minimum](minimum.md)
- [general.float.maximum](maximum.md)
- [general.integer.invalid](../integer/invalid.md)
