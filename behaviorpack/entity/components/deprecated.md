# Entity - Components - Deprecated

`behaviorpack.entity.components.deprecated`

**Severity:** warning

## Description

A deprecated entity component is being used in this entity definition. The component has been removed or superseded and may not function as expected in current versions of Minecraft Bedrock.

## What triggers this error

This error is triggered by the language server when it detects a known deprecated entity component in the entity's `components` or `component_groups` sections. The diagnoser checks a list of deprecated component identifiers and reports this warning for each one found.

## Example

The following entity definition uses a deprecated component:

```jsonc
{
  "format_version": "1.16.0",
  "minecraft:entity": {
    "description": {
      "identifier": "example:my_entity"
    },
    "components": {
      "minecraft:breathable": {
        "totalSupply": 15
      }
    }
  }
}
```

## How to fix

Replace the deprecated component with its modern equivalent. The error message typically indicates which component should be used as a replacement. Check the [Minecraft Bedrock documentation](https://learn.microsoft.com/en-us/minecraft/creator/reference/content/entityreference/examples/entitycomponents/) for the current list of supported components and their replacements.

Common replacements:
- Update the component identifier to the current version
- Review the Minecraft release notes for the version where the deprecation was introduced
- If no replacement exists, the feature may need to be re-implemented using a different approach

## Related errors

- [behaviorpack.entity.component.missing](../component/missing.md)
- [behaviorpack.block.components.deprecated](../../block/components/deprecated.md)
