# Entity - Aliases

`behaviorpack.entity.aliases`

**Severity:** warning

## Description

Entity aliases have been removed as of Minecraft Bedrock [1.21.20](https://feedback.minecraft.net/hc/en-us/articles/29110275666957-Minecraft-1-21-20-Bedrock). Using the `aliases` section in an entity definition will have no effect in current versions.

## What triggers this error

This warning is triggered when the language server detects an `aliases` block in a behavior pack entity definition. The `aliases` feature allowed entities to be referenced by alternative identifiers, but this capability was removed in the 1.21.20 update.

## Example

The following entity definition uses the deprecated aliases feature:

```jsonc
{
  "format_version": "1.16.0",
  "minecraft:entity": {
    "description": {
      "identifier": "example:my_entity",
      "aliases": {
        "example:my_entity_alias": {}
      }
    },
    "components": {}
  }
}
```

## How to fix

Remove the `aliases` block from the entity's `description`. If you need the entity to be accessible by multiple identifiers, consider:

1. Creating separate entity definition files for each identifier
2. Using spawn rules to control where each variant spawns
3. Using entity properties and variants instead of aliases

```jsonc
{
  "format_version": "1.21.20",
  "minecraft:entity": {
    "description": {
      "identifier": "example:my_entity"
    },
    "components": {}
  }
}
```

## Related errors

- [behaviorpack.entity.permutations](../permutations.md)
