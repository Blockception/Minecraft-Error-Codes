# Texture - Missing

`resourcepack.texture.missing`

**Severity:** Error

A texture file referenced in the resource pack could not be found on disk.

## Error message

```
Cannot find file: <texture_path>
```

## Description

This error is raised when a path specified in a resource pack definition does not resolve to an actual texture file within the resource pack's `textures/` folder. The diagnoser scans for files matching `**/textures/**/*.{tga,png,jpg,jpeg}` inside the resource pack, strips file extensions for comparison, and checks whether any found file path ends with the referenced texture path. If no match is found and the texture is not a known vanilla or education-edition built-in texture, this error is reported.

Accepted texture file formats are: `.tga`, `.png`, `.jpg`, `.jpeg`.

## Contexts

This diagnostic can be triggered in the following resource pack file types:

- **Texture Atlas** (`terrain_texture.json`, `item_texture.json`) — each entry under `texture_data` is verified. Supports string paths, arrays of paths, and detailed texture specs with `path` and `variations` fields.
- **Flipbook Texture Atlas** (`flipbook_textures.json`) — each `flipbook_texture` path in the array is verified.
- **Resource Pack Entities** (`.entity.json`) — all texture paths defined under `minecraft:client_entity.description.textures` are checked.
- **Attachables** — all texture paths defined under `minecraft:attachable.description.textures` are checked.
- **Particles** — the `basic_render_parameters.texture` path in particle definitions is checked.

## Example

The following entry in `terrain_texture.json` references a texture path that does not exist:

```jsonc
{
  "texture_data": {
    "my_block": {
      "textures": "textures/blocks/my_block"
    }
  }
}
```

If the file `textures/blocks/my_block.png` (or `.tga`, `.jpg`, `.jpeg`) does not exist in the resource pack, the error `Cannot find file: textures/blocks/my_block` is reported.

## How to fix

Ensure the texture file exists at the referenced path inside the resource pack's `textures/` folder. The path must be specified **without** the file extension (e.g., `textures/blocks/stone` not `textures/blocks/stone.png`). The file itself must use one of the supported formats: `.tga`, `.png`, `.jpg`, or `.jpeg`.
