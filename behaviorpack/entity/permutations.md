# Entity - Permutations

`behaviorpack.entity.permutations`

**Severity:** warning

## Description

Entity permutations have been removed as of Minecraft Bedrock [1.21.20](https://feedback.minecraft.net/hc/en-us/articles/29110275666957-Minecraft-1-21-20-Bedrock). Using the `permutations` section in an entity definition will have no effect in current versions.

## What triggers this error

This warning is triggered when the language server detects a `permutations` block in a behavior pack entity definition. Permutations were used to conditionally apply component groups based on Molang queries, but this feature has been superseded by entity properties in newer versions.

## Example

The following entity definition uses the deprecated permutations feature:

```jsonc
{
  "format_version": "1.16.0",
  "minecraft:entity": {
    "description": {
      "identifier": "example:my_entity"
    },
    "permutations": [
      {
        "condition": "query.is_baby",
        "components": {
          "minecraft:scale": { "value": 0.5 }
        }
      }
    ],
    "components": {}
  }
}
```

## How to fix

Replace permutations with entity properties and component groups. Entity properties provide a more explicit and performant way to manage entity variants:

```jsonc
{
  "format_version": "1.21.20",
  "minecraft:entity": {
    "description": {
      "identifier": "example:my_entity",
      "properties": {
        "example:is_baby": {
          "type": "bool",
          "default": false,
          "client_sync": true
        }
      }
    },
    "component_groups": {
      "example:baby": {
        "minecraft:scale": { "value": 0.5 }
      }
    },
    "components": {},
    "events": {
      "example:set_baby": {
        "add": { "component_groups": ["example:baby"] },
        "set_property": { "example:is_baby": true }
      }
    }
  }
}
```

## Related errors

- [behaviorpack.entity.aliases](aliases.md)
- [behaviorpack.entity.property.unknown](property/unknown.md)
