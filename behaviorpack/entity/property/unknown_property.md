# Unknown property

The property you are referencing could not be found on the entity

## Valid syntax

```json
{
    "minecraft:entity": {
        "description": {
            "properties": {
                "minecraft:has_nectar": {
                    "type": "bool",
                    "client_sync": true,
                    "default": "query.had_component_group('has_nectar')"
                }
            }
        },
        "events": {
            "minecraft:exited_disturbed_hive": {
                "set_property": {
                    "minecraft:has_nectar": false
                }
            }
        }
    }
}
```
