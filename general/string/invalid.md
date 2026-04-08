# String - Invalid

`general.string.invalid`

**Severity:** error

## Description

The value provided is not a valid Minecraft string. Minecraft strings have specific formatting requirements — they must not contain unquoted spaces, and any quotes used must be properly matched and escaped.

## What triggers this error

This error is triggered by the language server when a string value fails Minecraft's string validation. Common causes include:

- A string contains spaces but is not wrapped in quotes
- A string has mismatched quotes (e.g., opens with `"` but does not close, or vice versa)
- A string contains characters that are not allowed in an unquoted Minecraft string

The validation is performed by the `general/string.ts` diagnoser which checks each string value against Minecraft's string format rules.

## Example

The following will trigger this error because the string contains a space but is not quoted:

```mcfunction
# Unquoted string with spaces — invalid
tag @s add my tag

# Correct — quoted string
tag @s add "my tag"
```

In JSON, an invalid string value might look like:

```jsonc
{
  "description": {
    // Missing quotes around identifier containing a space
    "identifier": "example:my entity"
  }
}
```

## How to fix

1. If the string contains spaces, wrap it in double quotes
2. Ensure all opening quotes have a matching closing quote
3. Escape any double quotes within the string using `\"`
4. For Minecraft identifiers (`namespace:name`), avoid using spaces entirely — use underscores instead

## Related errors

- [general.keyword.invalid](../keyword/invalid.md)
- [minecraft.name.unquoted](../../minecraft/name/unquoted.md)
