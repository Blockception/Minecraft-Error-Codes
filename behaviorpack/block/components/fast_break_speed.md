# Block - Components - Fast Break Speed

`item_specific_destroy_speeds`'s speed values cannot be higher than block's destroy time

## Example

```json
{
    "minecraft:destructible_by_mining": {
        "seconds_to_destroy": 3,
        "item_specific_speeds": [
            {
                "destroy_speed": 10  // Invalid as it must be equal or lesser than 3
            }
        ]
    }
}
```
