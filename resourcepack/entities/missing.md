# Entities - Missing

`resourcepack.entities.missing`

**Severity:** error

## Description

The language server cannot find the resource pack entity definition that is being referenced. The entity client definition either does not exist in any loaded resource pack or has an identifier that does not match the reference.

## What triggers this error

This error is triggered when a resource pack entity identifier is referenced but no matching entity definition file can be found in the resource packs. This is typically a cross-reference check that verifies behavior pack entities have corresponding resource pack definitions, or that an entity identifier used in an animation, render controller, or other resource is actually defined.

## Example

If a behavior pack defines an entity `example:my_entity`, the resource pack should have a corresponding entity definition at `entity/example/my_entity.json` (or similar path). If this file is missing, the error will be reported.

```jsonc
// behavior_pack/entities/my_entity.json
{
  "format_version": "1.16.0",
  "minecraft:entity": {
    "description": {
      "identifier": "example:my_entity",
      "is_spawnable": true,
      "is_summonable": true
    },
    "components": {}
  }
}
```

If no matching `example:my_entity` resource pack entity definition exists, this error will appear.

## How to fix

1. Create the matching resource pack entity definition file in your resource pack's `entity/` folder
2. Ensure the `identifier` in the resource pack entity definition matches the behavior pack entity identifier exactly
3. Check for typos in the namespace or entity name
4. Verify the resource pack is correctly referenced and loaded alongside the behavior pack

A minimal resource pack entity definition looks like:

```jsonc
// resource_pack/entity/my_entity.json
{
  "format_version": "1.10.0",
  "minecraft:client_entity": {
    "description": {
      "identifier": "example:my_entity",
      "materials": { "default": "entity_alphatest" },
      "textures": { "default": "textures/entity/my_entity" },
      "geometry": { "default": "geometry.my_entity" },
      "render_controllers": ["controller.render.default"]
    }
  }
}
```

## Related errors

- [resourcepack.entity.missing](../entity/missing.md)
- [behaviorpack.entities.missing](../../behaviorpack/entities/missing.md)
