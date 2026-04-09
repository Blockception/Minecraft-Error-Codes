# Commands - Syntax

`minecraft.commands.<command>.syntax`

**Severity:** error

## Description

This is the general documentation page for command syntax errors. When Minecraft Bedrock's language server detects that a command in an `.mcfunction` file does not match the expected syntax, it reports a `minecraft.commands.<command>.syntax` error, where `<command>` is the name of the command that failed validation.

For example, an invalid use of `/say` would produce `minecraft.commands.say.syntax`, and the documentation link would point to [`minecraft/commands/say/syntax.md`](say/syntax.md).

## What triggers this error

Syntax errors are triggered when:

- A required parameter is missing from a command
- A parameter has the wrong type (e.g., a number where a selector is expected)
- An unknown keyword is used in a position that expects a specific keyword
- The overall structure of the command does not match any known valid overload

The language server validates commands against all known valid overloads for a given command and reports this error when none of them match.

## Example

The following mcfunction contains a syntax error in the `give` command (missing required item parameter):

```mcfunction
# Missing the item parameter — will trigger minecraft.commands.give.syntax
give @a

# Correct usage
give @a minecraft:apple 1
```

Another example with wrong parameter type:

```mcfunction
# Using a number where a selector is expected
kill 5

# Correct usage
kill @e[type=zombie]
```

## How to fix

1. Check the specific command's documentation page (linked from the error in your IDE)
2. Ensure all required parameters are provided in the correct order
3. Verify parameter types match what the command expects (selectors, numbers, keywords, etc.)
4. Use the command-specific documentation pages in this repository for the exact syntax of each command

See also the [individual command syntax pages](../commands/) for the full parameter list of each command.

## Related errors

- [minecraft.commands.obsolete](obsolete.md)
- [minecraft.commands.invalid](invalid.md)
