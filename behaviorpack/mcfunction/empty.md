# Mcfunction - Empty

`behaviorpack.mcfunction.empty`

**Severity:** error

## Description

The `.mcfunction` file is empty. Minecraft will not load empty function files, which means any reference to this function will silently fail at runtime.

## What triggers this error

This error is triggered by the language server when it detects that a `.mcfunction` file contains no commands (only blank lines or comments, or is completely empty). Source: `packages/bedrock-diagnoser/src/diagnostics/behavior-pack/mcfunction/document.ts`.

## Example

An empty function file or one with only comments:

```mcfunction
# This file intentionally left blank
```

Or a completely empty file with no content at all.

## How to fix

Add at least one valid command to the function file:

```mcfunction
# Example: a simple function that says hello
say Hello from my function!
```

If you intend the function to be a placeholder that does nothing, you can use a harmless command:

```mcfunction
# No-op placeholder
say DEBUG: function called
```

Or if the function is no longer needed, remove all references to it and delete the file.

## Related errors

- [behaviorpack.functions.missing](../functions/missing.md)
- [behaviorpack.mcfunction.missing](missing.md)