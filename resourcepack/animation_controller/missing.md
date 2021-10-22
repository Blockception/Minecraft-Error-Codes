# Animation - Missing

`resourcepack.animation_controller.missing`

A definition of an animation controllera is missing from resourcepack(s)

This can be caused by one of the following reasons:

- The animation controllers wasn't properly defined in the animations / animations_controllers field of the user.
- The json file of the user is invalid.
- The json file of the animation controllers is invalid.
- The animation controllers hasn't been definide yet
- A type in the animation controllers identification.

## Example

A property definition of an animation controllers in the entity resourcepack

```jsonc
{
  "animations": {
    //animations
    "controller.emote": "controller.animation.npc.emote"
  }
}
```
