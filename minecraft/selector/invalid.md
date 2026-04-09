# Selector - Invalid

`minecraft.selector.invalid`

**Severity:** error

## Description

The target selector used in this command is invalid. Either it uses a fake entity (`@fake`) in a context where only real entities or players are allowed, or a player-only selector is used in a context restricted to players.

## What triggers this error

This error is triggered by the language server when a target selector fails validation. Common causes include:

- Using a fake entity selector (`@e[type=<fake_entity>]`) in a command that only accepts real Minecraft entities
- Using `@a` (all players) or `@p` (nearest player) in a command context restricted to players, when a non-player entity might be matched
- Using an entity selector in a command that explicitly requires a player

## Example

Using a fake entity where a player-only selector is required:

```mcfunction
# Invalid — xp command requires a player, not a fake entity
xp 10L @e[type=example:fake_npc]

# Correct — use a player selector
xp 10L @a
xp 10L @p
```

## How to fix

1. Use a player selector (`@a`, `@p`, `@s` when executed as a player) in commands that require players
2. Use `@e[type=player]` to explicitly filter for player entities when needed
3. If using fake entities, ensure the command context supports fake entity selectors
4. Check the specific command's documentation page for what selector types are accepted

## Related errors

- [minecraft.selector.attribute.noduplicate](attribute/noduplicate.md)
- [minecraft.selector.type.invalid](type/invalid.md)
- [minecraft.fakeentity.missing](../fakeentity/missing.md)
