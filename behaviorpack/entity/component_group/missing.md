# component_group - Missing

`behaviorpack.entity.component_group.missing`

An event inside of the behavior is referencing a component group that has not been defined inside of the component_groups section.

**Examples**

```jsonc
{
  "format_version": "1.17.0",
  "minecraft:entity": {
    "description": {
      "identifier": "example:npc"
    },
    "component_groups": {
	   "group_a": { }
	},
    "components": {
    },
    "events": {
      "minecraft:entity_spawned": {
        "add": {
          "component_groups": [
		    //This component_group is properly defined
		    "group_a",
		    //This component_group is not defined.
		    "group_b"
		  ]
        }
      }
    }
  }
}

```