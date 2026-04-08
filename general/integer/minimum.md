# Integer - Minimum

`general.integer.minimum`

**Severity:** error

## Description

The integer value provided is below the minimum allowed value for this field. Each integer field in Minecraft Bedrock has a defined lower bound, and supplying a value below that bound is invalid.

## What triggers this error

This error is triggered when the language server validates an integer value and finds it is less than the minimum allowed value specified for that field. The minimum value varies by field — for example, a health value cannot be negative, and a slot index must be at or above zero.

## Example

The following triggers the error because health cannot be negative:

```jsonc
{
  "minecraft:health": {
    "value": -5,  // Invalid — health cannot be negative
    "max": 20
  }
}
```

## How to fix

Increase the value to be at or above the minimum allowed for this field. The IDE error message typically indicates what the minimum value is. Refer to the [Minecraft Bedrock documentation](https://learn.microsoft.com/en-us/minecraft/creator/) for the valid range of each field.

## Related errors

- [general.integer.invalid](invalid.md)
- [general.integer.maximum](maximum.md)