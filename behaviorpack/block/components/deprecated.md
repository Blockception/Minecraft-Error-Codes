# Block - Components - Deprecated

`behaviorpack.block.components.deprecated`

**Severity:** warning

## Description

A deprecated block component is being used in this block definition. The component has been replaced by a newer equivalent and will not work correctly in current versions of Minecraft Bedrock.

## What triggers this error

This warning is triggered when the language server detects a known deprecated block component. The diagnoser maintains a list of deprecated components and their replacements. Common deprecated components include:

| Deprecated Component | Replacement |
|---|---|
| `minecraft:aim_collision` | `minecraft:selection_box` |
| `minecraft:block_light_absorption` | `minecraft:light_dampening` |
| `minecraft:destroy_time` | `minecraft:destructible_by_mining` |
| `minecraft:explosion_resistance` | `minecraft:destructible_by_explosion` |
| `minecraft:immovable` | `minecraft:push_reaction` |
| `minecraft:ticking` | `minecraft:queued_ticking` |
| `minecraft:breathability` | _(removed)_ |

Source: `packages/bedrock-diagnoser/src/diagnostics/behavior-pack/block/components/diagnose.ts`

## Example

The following block definition uses the deprecated `minecraft:destroy_time` component:

```jsonc
{
  "format_version": "1.16.0",
  "minecraft:block": {
    "description": {
      "identifier": "example:my_block"
    },
    "components": {
      "minecraft:destroy_time": 2.0
    }
  }
}
```

## How to fix

Replace the deprecated component with its modern equivalent:

```jsonc
{
  "format_version": "1.20.0",
  "minecraft:block": {
    "description": {
      "identifier": "example:my_block"
    },
    "components": {
      "minecraft:destructible_by_mining": {
        "seconds_to_destroy": 2.0
      }
    }
  }
}
```

The error message in your IDE will typically name the replacement component. Refer to the [Minecraft Bedrock block component documentation](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/blockcomponents/) for the full list of current block components.

## Related errors

- [behaviorpack.block.components.creative_category.deprecated](creative_category/deprecated.md)
- [behaviorpack.entity.components.deprecated](../../entity/components/deprecated.md)
- [behaviorpack.biome.components.deprecated](../../biome/components/deprecated.md)
