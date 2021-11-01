# Script - Animation / Controller - Missing

`minecraft.script.animate.missing`

Anything that the script has to animate needs to have been properly declared or defined in animation (or animation_controllers when dealing with older formats) in the animations section

**Examples**

This is an example of having on controller properly defined and the other one is missing.

```jsonc
{
  "animations": {
	//reference : animation or controller identification
    "controller.emote": "controller.animation.npc.emote"
  },
  "scripts": {
    "animate": [
	  //This reference is defined
	  "controller.emote",

	  //This reference is not defined and will cause the error
	  "controller.move"
	]
  },
}
```