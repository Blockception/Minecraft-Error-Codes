# Minecraft - Path - Length

`minecraft.format.path.length`

The relative path of a file inside a pack cannot be more then 71 characters. Each segment is only allowed to be 60 characters

## Examples

The following will cause errors:

```c
/recipes/stonecutter_w_weathered_copper_block_to_cut_copper_stairs.json //The filename is too long, the total is too long as well.
```
