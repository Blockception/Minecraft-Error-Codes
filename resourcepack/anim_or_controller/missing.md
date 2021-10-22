# Animation / Animation Controller - Missing

`resourcepack.anim_or_controller.missing`

A definition of an animation or animation controllers is missing from resourcepack(s).

This can be caused by one of the following reasons:

- The animation or controller wasn't properly defined in the animations field of the user.
- The json file of the user is invalid.
- The json file of the animation or controller is invalid.
- The animation / controller hasn't been definide yet
- A type in the animation or controller identification.

## Example

A property definition of an animation, or animation controllers in the entity resourcepack

```jsonc
{
  "animations": {
    //controllers
    "controller.emote": "controller.animation.npc.emote",

    //animations
    "anim.wave": "animation.npc.wave"
  },
  "scripts": {
    "animate": ["controller.emote"]
  }
}
```
