# Biome - Pre 1.17 Component

`behaviorpack.biome.components.pre_1.17_component`

**Severity:** warning

## Description

This biome definition uses a component that predates the Caves and Cliffs update (1.17). These pre-1.17 biome components do not work with custom biomes created using behavior packs and will be silently ignored.

## What triggers this error

This warning is triggered when the language server detects biome components that were part of the legacy biome system used before the Caves and Cliffs update. These components were designed for the old world generation pipeline and are incompatible with the custom biome API available to content creators.

Examples of affected components include older overworld generation components that relied on the pre-1.17 world generation system.

## Example

The following biome definition uses a legacy component that is incompatible with custom biomes:

```jsonc
{
  "format_version": "1.13.0",
  "minecraft:biome": {
    "description": {
      "identifier": "example:my_biome"
    },
    "components": {
      "minecraft:overworld_generation_rules": {
        "hills_transformation": "jungle_hills",
        "shore_transformation": "beach",
        "generate_for_climates": [
          ["cold", 1]
        ]
      }
    }
  }
}
```

## How to fix

Remove or replace the pre-1.17 component with a modern equivalent. For world generation, refer to the current Minecraft Bedrock [custom biomes documentation](https://learn.microsoft.com/en-us/minecraft/creator/documents/custombiomes) to understand which components are supported for add-on biomes.

Note that not all biome features available to vanilla Minecraft biomes can be replicated through the custom biome API. Some features are restricted to built-in biomes only.

## Related errors

- [behaviorpack.biome.components.deprecated](deprecated.md)
- [behaviorpack.biome.components.replace_biomes.multiple_dimensions](replace_biomes/multiple_dimensions.md)
