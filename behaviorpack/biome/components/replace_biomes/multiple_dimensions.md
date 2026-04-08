# Biome - Replace Biomes - Multiple Dimensions

`behaviorpack.biome.components.replace_biomes.multiple_dimensions`

**Severity:** warning

## Description

This biome definition attempts to replace biomes in both the Overworld and the Nether simultaneously. Using biome replacement for multiple dimensions in a single biome definition is discouraged as it can cause unexpected behavior and conflicts.

## What triggers this error

This warning is triggered when the language server detects that a biome's replace biomes component targets more than one dimension. Each biome replacement should target a single dimension to avoid conflicts and ensure predictable behavior.

## Example

The following biome definition incorrectly targets multiple dimensions:

```jsonc
{
  "format_version": "1.16.0",
  "minecraft:biome": {
    "description": {
      "identifier": "example:my_custom_biome"
    },
    "components": {
      "minecraft:overworld_height": {
        "noise_params": [0, 0.1]
      },
      "minecraft:nether_generation_rules": {
        "target_percentage": 0.1
      }
    }
  }
}
```

## How to fix

Split the biome definition into separate files, one per dimension:

```jsonc
// example:my_custom_biome_overworld.json
{
  "format_version": "1.16.0",
  "minecraft:biome": {
    "description": {
      "identifier": "example:my_custom_biome_overworld"
    },
    "components": {
      "minecraft:overworld_height": {
        "noise_params": [0, 0.1]
      }
    }
  }
}
```

```jsonc
// example:my_custom_biome_nether.json
{
  "format_version": "1.16.0",
  "minecraft:biome": {
    "description": {
      "identifier": "example:my_custom_biome_nether"
    },
    "components": {
      "minecraft:nether_generation_rules": {
        "target_percentage": 0.1
      }
    }
  }
}
```

## Related errors

- [behaviorpack.biome.components.deprecated](../deprecated.md)
- [behaviorpack.biome.components.pre_1.17_component](../pre_1.17_component.md)
