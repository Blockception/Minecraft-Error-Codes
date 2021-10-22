# Entity - Component - Missing

`behaviorpack.entity.component.missing`  
`behaviorpack.entity.component.missing.*`

A specified component is missing from the entity

This error most frequently appears when there is component dependency, certain components require other components or values to be present

## Example

The following will result in an error:

```jsonc
{
  "format_version": "1.16.0",
  "minecraft:entity": {
    "description": {
      "identifier": "example:foo"
    },
    "component_groups": {
      "bar": {
        "minecraft:movement.basic": { "max_turn": 10 }
      }
    },
    "components": {
      "minecraft:movement": { "value": 0.1 }
    }
  }
}
```

This entity still requires by convention something as `minecraft:navigation.walk` though any `minecraft:navigation.*` type will work. Aslong as its in the components or in a
component groups the diagnoser will count it as valid.
