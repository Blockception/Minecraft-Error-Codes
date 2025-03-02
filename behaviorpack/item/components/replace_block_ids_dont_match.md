# Item - Components - Replace Block IDs Don't Match

`behaviorpack.item.components.replace_block_ids_dont_match`

`minecraft:block_placer`'s block value must match the item's identifier when `replace_block_item` is true

```json
{
  "format_version": "1.21.50",
  "minecraft:item": {
    "description": {
      "identifier": "test:block" // Needs to be the same as 
    },
    "components": {
      "minecraft:block_placer": {
        "block": "test:block", // This value
        "replace_block_item": true // When this is true
      }
    }
  }
}
```
