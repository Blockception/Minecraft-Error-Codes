# Entity - Incompatible Runtime

`behaviorpack.entity.incompatible_runtime`

A specified component is incompatible with the entity's runtime identifier.

## Example

The following will result in an error:

```jsonc
{
  "format_version": "1.16.0",
  "minecraft:entity": {
    "description": {
      "identifier": "example:foo",
      "runtime_identifier": "minecraft:dolphin"
    },
    "components": {
      "minecraft:movement.basic": {}
    }
  }
}
```

The runtime `minecraft:dolphin` adds the component `minecraft:movement.dolphin` to the entity. There being two movement components causes an error.
