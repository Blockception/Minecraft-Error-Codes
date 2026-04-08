# Commands - Obsolete

`minecraft.commands.<command>.obsolete`

**Severity:** warning

## Description

This is the general documentation page for obsolete command syntax warnings. When the language server detects a command or command overload that has been superseded by a newer syntax, it reports a `minecraft.commands.<command>.obsolete` warning.

For example, the old `/execute` syntax has been replaced by a new chained syntax in newer versions of Minecraft Bedrock. Using the old form produces `minecraft.commands.execute.obsolete`.

## What triggers this error

Obsolete warnings are triggered when:

- A command uses a syntax form that was valid in an older version of Minecraft Bedrock but has since been replaced
- A deprecated command overload is used when a better alternative exists
- The command syntax matches a legacy form that Minecraft still supports for backwards compatibility but no longer recommends

Unlike `syntax` errors (which indicate the command is completely invalid), `obsolete` warnings indicate the command will still work but should be updated to the modern equivalent.

## Example

The old `/execute` syntax is obsolete in favor of the new chained form:

```mcfunction
# Old syntax — triggers minecraft.commands.execute.obsolete
execute @e[type=zombie] ~ ~ ~ detect ~ ~ ~ minecraft:grass 0 say I'm on grass

# Modern syntax
execute as @e[type=zombie] at @s if block ~ ~ ~ minecraft:grass run say I'm on grass
```

Another example with `/replaceitem` (replaced by `/item` in newer versions):

```mcfunction
# Old syntax
replaceitem entity @s slot.weapon.mainhand 0 minecraft:diamond_sword

# Modern syntax
item replace entity @s slot.weapon.mainhand with minecraft:diamond_sword
```

## How to fix

1. Check the specific command's documentation page (linked from the warning in your IDE)
2. Update the command to use the modern syntax shown in the command's documentation
3. Test the new syntax in-game to confirm it behaves identically to the old form
4. Some obsolete commands have been fully removed in newer versions — check the [Minecraft changelog](https://feedback.minecraft.net/hc/en-us/sections/360001186971) to confirm the command is still available

## Related errors

- [minecraft.commands.syntax](syntax.md)
- [minecraft.commands.execute.deprecated](execute/deprecated.md)
- [minecraft.commands.setblock.obsolete](setblock/obsolete.md)
