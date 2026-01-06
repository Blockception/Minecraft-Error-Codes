# Molang - Array - Undefined

Render controllers, usually define their own Molang arrays:

```json
{
  "arrays": {
    "geometries": {
      "Array.geos": ["Geometry.default", "Geometry.sheared"]
    }
  },
  "geometry": "Array.geos[query.is_sheared]",
}
```

## References
- [Bedrock Wiki](https://wiki.bedrock.dev/entities/render-controllers)
- [Microsoft Documentation](https://learn.microsoft.com/en-us/minecraft/creator/documents/animations/animationrendercontroller?view=minecraft-bedrock-stable)
