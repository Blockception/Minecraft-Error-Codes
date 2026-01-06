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
