# Block - Components - Texture not found

The block texture shortname you have specificed could not be found in the `terrain_texture.json` file.

For example;

```json
{
    "minecraft:material_instances": {
        "*": {
            "render_method": "opaque",
            "texture": "diamond_block"
        }
    }
}
```

```json
{
    "resource_pack_name": "rp",
    "texture_name": "atlas.terrain",
    "padding": 8,
    "num_mip_levels": 4,
    "texture_data": {
        "diamond_block": {
            "textures": "textures/blocks/diamond_block"
        }
    }
}
```

Ensure the other properties such as `padding`, `num_mip_levels` are also found in the `terrain_texture.json`
