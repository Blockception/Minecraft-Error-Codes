# Selector - Type - Invalid

`minecraft.selector.type.invalid`|

Throw if a entity selector is invalid.

Valid types are:

| Type         | Description                                           |
| ------------ | ----------------------------------------------------- |
| `@a`         | Targets all players                                   |
| `@e`         | Targets all entities                                  |
| `@r`         | Targets random players, or if specified, random types |
| `@p`         | Targets the nearest player                            |
| `@s`         | Targets the executing entity                          |
| `@initiator` | Target the initiating entity                          |
| `@c`         | Targets the executing players agent, eduOnly: true    |
| `@v`         | Targets all agents, eduOnly: true                     |