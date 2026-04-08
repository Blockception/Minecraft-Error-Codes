# Biome - Components - Deprecated

`behaviorpack.biome.components.deprecated`

**Severity:** warning

## Description

A deprecated biome component is being used in this biome definition. These components have been removed or replaced in newer versions of Minecraft Bedrock and may not work correctly.

## What triggers this error

This error is triggered when the language server detects a known deprecated biome component. Known deprecated components include:

- `minecraft:surface_parameters` — replaced by `minecraft:surface_builder`
- `minecraft:frozen_ocean_surface` — replaced by `minecraft:surface_builder`
- `minecraft:mesa_surface` — replaced by `minecraft:surface_builder`
- `minecraft:overworld_generation_rules` — superseded by newer world generation APIs
- `minecraft:climate` (partially deprecated features)

## Example

The following biome definition uses a deprecated surface component:

```jsonc
{
  "format_version": "1.13.0",
  "minecraft:biome": {
    "description": {
      "identifier": "example:my_biome"
    },
    "components": {
      "minecraft:surface_parameters": {
        "top_material": "minecraft:grass",
        "mid_material": "minecraft:dirt",
        "sea_floor_material": "minecraft:gravel",
        "foundation_material": "minecraft:stone",
        "sea_material": "minecraft:water"
      }
    }
  }
}
```

## How to fix

Replace deprecated surface parameter components with `minecraft:surface_builder`:

```jsonc
{
  "format_version": "1.21.0",
  "minecraft:biome": {
    "description": {
      "identifier": "example:my_biome"
    },
    "components": {
      "minecraft:surface_builder": {
        "identifier": "minecraft:default_surface_builder",
        "top_material": "minecraft:grass",
        "mid_material": "minecraft:dirt",
        "sea_floor_material": "minecraft:gravel",
        "foundation_material": "minecraft:stone",
        "sea_material": "minecraft:water"
      }
    }
  }
}
```

Refer to the [Minecraft Bedrock biome documentation](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/biomereference/) for the current list of supported biome components.

## Related errors

- [behaviorpack.biome.components.climate.particles](climate/particles.md)
- [behaviorpack.biome.components.pre_1.17_component](pre_1.17_component.md)
- [behaviorpack.biome.components.replace_biomes.multiple_dimensions](replace_biomes/multiple_dimensions.md)
- [behaviorpack.block.components.deprecated](../../block/components/deprecated.md)
