# Animation - Missing

`behaviorpack.animation.missing`

A definition of an animation is missing from behaviorpack(s)

This can be caused by one of the following reasons:

- The animation wasn't properly defined in the animations field of the user.
- The json file of the user is invalid.
- The json file of the animation is invalid.
- The animation hasn't been definide yet
- A type in the animation identification.

## Example

A property definition of an animation in the entity behaviorpack

```jsonc
{
  "animations": {
    //animations
    "anim.wave": "animation.npc.wave"
  }
}
```
