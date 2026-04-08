# Functions - Missing

`behaviorpack.functions.missing`

**Severity:** error

## Description

The language server cannot find the behavior pack function definition that is being referenced. The function file either does not exist or has a path that does not match the reference.

## What triggers this error

This error is triggered when a reference to a behavior pack function (`.mcfunction` file) cannot be resolved. This commonly happens in:

- The `function` command in another `.mcfunction` file
- Tick function lists (`tick.json`)
- Other places that reference function paths

## Example

The following mcfunction command references a function that does not exist:

```mcfunction
# This will trigger the error if "my_pack/setup" doesn't exist
function my_pack/setup
```

Or in a `tick.json` file referencing a non-existent function:

```jsonc
{
  "values": [
    "my_pack/tick_handler"
  ]
}
```

## How to fix

1. Verify the function file exists at the correct path within your behavior pack's `functions/` directory
2. Check the path is correct — function paths are relative to the `functions/` folder and use `/` as the separator (not `\`)
3. Ensure the file has the `.mcfunction` extension
4. Check for typos in the function name or path

For example, the command `function my_pack/setup` requires the file to exist at `<behavior_pack>/functions/my_pack/setup.mcfunction`.

## Related errors

- [behaviorpack.mcfunction.empty](../mcfunction/empty.md)
- [behaviorpack.mcfunction.missing](../mcfunction/missing.md)
