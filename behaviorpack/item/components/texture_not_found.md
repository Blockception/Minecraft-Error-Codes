# Item - Texture not found

`behaviorpack.item.components.texture_not_found`

**Severity:** Error

The item texture shortname you have specified could not be found in the `item_texture.json` file of any resource pack in the project, nor in the list of built-in vanilla texture shortnames.

## Trigger conditions

This error is raised in two situations:

### 1. `minecraft:icon` on a behavior pack item

The `minecraft:icon` component supports three formats, and the shortname is checked in each case:

**String shorthand** — the entire value is the texture shortname:

```json
{
  "minecraft:icon": "apple"
}
```

**Object with `texture` property** — the `texture` field is the shortname:

```json
{
  "minecraft:icon": {
    "texture": "apple"
  }
}
```

**Object with `textures` map (per-context textures)** — each value in the `textures` object is checked individually:

```json
{
  "minecraft:icon": {
    "textures": {
      "default": "apple",
      "charged": "apple_charged"
    }
  }
}
```

### 2. Spawn egg texture on a resource pack entity

The same diagnostic code is also emitted when a resource pack entity's `description.spawn_egg.texture` references a shortname that cannot be found in `item_texture.json`:

```json
{
  "minecraft:client_entity": {
    "description": {
      "identifier": "my_namespace:my_entity",
      "spawn_egg": {
        "texture": "my_entity_spawn_egg"
      }
    }
  }
}
```

## Where the shortname is resolved

The shortname is looked up in the `texture_data` object inside an `item_texture.json` file located in the resource pack:

```json
{
  "resource_pack_name": "rp",
  "texture_name": "atlas.items",
  "texture_data": {
    "apple": {
      "textures": "textures/items/apple"
    },
    "apple_charged": {
      "textures": "textures/items/apple_charged"
    }
  }
}
```

Vanilla built-in texture shortnames (from the Minecraft default resource pack) are also accepted and will **not** trigger this error.

## How to fix

1. **Check for typos** in the shortname used in `minecraft:icon` (or `spawn_egg.texture`) and correct any misspellings.
2. **Add the missing entry** to your resource pack's `item_texture.json` under `texture_data`, mapping the shortname to a texture path.
3. **Verify the file location** — the `item_texture.json` file must be placed at `textures/item_texture.json` inside a resource pack that is included in your project.
4. If you intended to reuse an existing vanilla texture, **check the vanilla shortname** matches exactly (shortnames are case-sensitive).
