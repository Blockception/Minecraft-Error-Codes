# Entity - Event - Missing

`behaviorpack.entity.event.missing`

**Severity:** warning

## Description

An entity event is referenced somewhere in the entity definition, but the event is not defined in that entity's `events` section.

## What triggers this error

This warning is triggered by the language server when a reference to an entity event (e.g., in a component's `on_hurt` or `on_death` callback, or in a `minecraft:trigger` component) points to an event identifier that does not exist in the entity's `events` block. The diagnoser reports: `Entity has no event "<id>"`.

## Example

The following entity definition references the event `example:do_something` in a trigger, but the event is not defined:

```jsonc
{
  "format_version": "1.16.0",
  "minecraft:entity": {
    "description": {
      "identifier": "example:my_entity"
    },
    "components": {
      "minecraft:health": {
        "value": 20,
        "max": 20
      },
      "minecraft:hurt_on_condition": {
        "damage_conditions": [
          {
            "filters": { "test": "in_lava" },
            "cause": "lava",
            "damage_per_tick": 4
          }
        ]
      },
      "minecraft:on_death": {
        "event": "example:do_something"  // Error: this event is not defined below
      }
    },
    "events": {
      // "example:do_something" is missing here
    }
  }
}
```

## How to fix

Either add the missing event definition to the entity's `events` section:

```jsonc
"events": {
  "example:do_something": {
    "add": {
      "component_groups": ["example:dead_state"]
    }
  }
}
```

Or correct the event name to match one that is already defined:

```jsonc
"minecraft:on_death": {
  "event": "example:existing_event"
}
```

## Related errors

- [behaviorpack.entity.component_group.missing](../component_group/missing.md)
- [behaviorpack.entity.component.missing](../component/missing.md)