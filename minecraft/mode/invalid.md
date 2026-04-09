# Mode - Missing

`minecraft.mode.<name>.invalid`

**Severity:** error

## Description

The value provided for this mode field is not one of the accepted values. Mode fields expect a specific keyword from a fixed list of options.

## What triggers this error

This error is triggered by the language server when a mode or enum field receives a value that is not in the list of valid options. Each mode field (such as game mode, fill mode, clone mode, etc.) has a fixed set of accepted string values, and providing anything outside that set results in this error.

For example:
- A `gamemode` field must be one of `survival`, `creative`, `adventure`, `spectator`
- A `fill` command's `fillMode` must be one of `destroy`, `hollow`, `keep`, `outline`, `replace`
- A `clone` command's `maskMode` must be one of `filtered`, `masked`, `replace`

## Example

The following triggers the error because `"god"` is not a valid game mode:

```mcfunction
# Invalid — "god" is not a valid game mode
gamemode god @s

# Correct
gamemode creative @s
gamemode survival @s
```

In JSON:

```jsonc
{
  "minecraft:movement": {
    "type": "flying"  // Invalid if "flying" is not an accepted mode value
  }
}
```

## How to fix

Replace the invalid mode value with one of the accepted values. Check the specific field's documentation or the command syntax page for the list of valid options:

- For command mode parameters, see the individual command's syntax page in this repository (e.g., [`minecraft/commands/gamemode/syntax.md`](../commands/gamemode/syntax.md))
- For JSON mode fields, check the [Minecraft Bedrock documentation](https://learn.microsoft.com/en-us/minecraft/creator/)

## Related errors

- [minecraft.commands.syntax](../commands/syntax.md)
- [general.keyword.invalid](../../general/keyword/invalid.md)
