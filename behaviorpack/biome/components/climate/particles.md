# Biome - Climate - Particles

`behaviorpack.biome.components.climate.particles`

**Severity:** warning

## Description

The particle capability inside the `minecraft:climate` biome component has been moved to `client_biome.json` files. Defining particles in the server-side biome definition no longer has any effect.

## What triggers this error

This warning is triggered when the language server detects a `particles` property inside the `minecraft:climate` component of a behavior pack biome definition. Since Minecraft moved ambient particle effects to client-side biome definitions, this server-side property is no longer processed.

## Example

The following biome definition uses the deprecated climate particles property:

```jsonc
{
  "format_version": "1.13.0",
  "minecraft:biome": {
    "description": {
      "identifier": "example:my_biome"
    },
    "components": {
      "minecraft:climate": {
        "temperature": 0.8,
        "downfall": 0.4,
        "particles": [
          {
            "id": "minecraft:ambient_block_chance",
            "chance": 0.01
          }
        ]
      }
    }
  }
}
```

## How to fix

Move the particle definition to the client-side `client_biome.json` file. Create or update the corresponding file in your resource pack:

```jsonc
// resource_pack/biomes_client/example:my_biome.json
{
  "format_version": "1.21.0",
  "minecraft:client_biome": {
    "description": {
      "identifier": "example:my_biome"
    },
    "components": {
      "minecraft:ambient_particles": {
        "particle": {
          "id": "minecraft:ambient_block_chance",
          "chance": 0.01
        }
      }
    }
  }
}
```

Remove the `particles` property from the `minecraft:climate` component in your behavior pack biome file.

## Related errors

- [behaviorpack.biome.components.deprecated](../deprecated.md)
- [behaviorpack.biome.components.pre_1.17_component](../pre_1.17_component.md)
