# Constant Folding

`molang.optimization.constant-folding`

**Severity:** hint

## Description

A Molang expression contains a constant sub-expression that can be pre-calculated (folded) into a single constant value. Pre-calculating constant expressions improves performance because Minecraft does not need to evaluate the expression at runtime.

## What triggers this error

This hint is triggered by the language server's Molang optimizer when it detects a mathematical expression involving only constant values that could be simplified. For example, `2 * 5` is always `10` and can be replaced with the constant `10`.

Source: `packages/bedrock-diagnoser/src/diagnostics/molang/optimizations/rules.ts`

## Example

The following Molang expressions trigger this hint:

```molang
# Constant arithmetic can be folded
2 * 5
# Can be simplified to: 10

# Constant in a larger expression
2 * query.anim_time * 5
# Can be simplified to: query.anim_time * 10

# Multiple constants
(10 + 5) * query.life_time
# Can be simplified to: 15 * query.life_time
```

In a JSON file:

```jsonc
{
  "render_controllers": {
    "controller.render.my_entity": {
      "arrays": {
        "textures.my_array": [
          "Texture.default"
        ]
      },
      "geometry": "Geometry.default",
      "materials": [{ "*": "Material.default" }],
      "textures": ["Array.my_array[2 * 3]"]
      //                              ^^^^ can be simplified to 6
    }
  }
}
```

## How to fix

Pre-calculate the constant expression and replace it with the result:

```molang
# Before
2 * query.anim_time * 5

# After
query.anim_time * 10
```

```jsonc
{
  "textures": ["Array.my_array[6]"]
}
```

This is an optimization hint, not a hard error — your content will still work without the fix, but applying it improves performance.

## Related errors

- [molang.optimization.constant-condition](constant-condition.md)
- [molang.optimization.constant-result](constant-result.md)
- [molang.optimization.identity-operation](identity-operation.md)