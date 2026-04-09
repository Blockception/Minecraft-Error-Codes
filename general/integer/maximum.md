# Integer - Maximum

`general.integer.maximum`

**Severity:** error

## Description

The integer value provided exceeds the maximum allowed value for this field. Each integer field in Minecraft Bedrock has a defined upper bound, and supplying a value above that bound is invalid.

## What triggers this error

This error is triggered when the language server validates an integer value and finds it exceeds the maximum allowed value specified for that field. The maximum value varies by field — for example, a stack size cannot exceed 64, and certain game rule values have caps.

## Example

The following triggers the error because the maximum value exceeds the field's allowed range:

```jsonc
{
  "minecraft:health": {
    "value": 10,
    "max": 100000  // Invalid — exceeds the maximum allowed health value
  }
}
```

## How to fix

Decrease the value to be at or below the maximum allowed for this field. The IDE error message typically indicates what the maximum value is. Refer to the [Minecraft Bedrock documentation](https://learn.microsoft.com/en-us/minecraft/creator/) for the valid range of each field.

## Related errors

- [general.integer.invalid](invalid.md)
- [general.integer.minimum](minimum.md)