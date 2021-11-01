# Manifest Module Missing

`minecraft.manifest.module.missing`

The module section in the manifest is required to have a certain type:

## Skinpacks

Skinpack manifest are required to have a skin_pack module:

```jsonc
    "modules": [
        {
            "description": "Example skin_pack module",
            "type": "skin_pack",
            "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "version": [1, 0, 0]
        }
    ]
```

## Behavior packs

Behavior packs are required to have a data module

```jsonc
    "modules": [
        {
            "description": "Example behavior module",
            "type": "data",
            "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "version": [1, 0, 0]
        }
    ]
```

## Resource packs

Resource packs are required to have a resources module

```jsonc
    "modules": [
        {
            "description": "Example resources module",
            "type": "resources",
            "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            "version": [1, 0, 0]
        }
    ]
```