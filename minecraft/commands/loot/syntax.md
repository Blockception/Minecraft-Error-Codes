# loot

## loot - Nr: 0

Drops the given loot table into the world

```mcfunction
loot give <players: selector> kill <entity target: selector> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`give`|keyword|true||
|`players`|selector|true|Only players allowed<br/>|
|`kill`|keyword|true||
|`entity target`|selector|true||
|`item`|item|false||



## loot - Nr: 1

Drops the given loot table into the world

```mcfunction
loot give <players: selector> kill <entity target: selector> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`give`|keyword|true||
|`players`|selector|true|Only players allowed<br/>|
|`kill`|keyword|true||
|`entity target`|selector|true||
|`tool`|handType|false||



## loot - Nr: 2

Drops the given loot table into the world

```mcfunction
loot give <players: selector> loot <loot table: lootTable> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`give`|keyword|true||
|`players`|selector|true|Only players allowed<br/>|
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`item`|item|false||



## loot - Nr: 3

Drops the given loot table into the world

```mcfunction
loot give <players: selector> loot <loot table: lootTable> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`give`|keyword|true||
|`players`|selector|true|Only players allowed<br/>|
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`tool`|handType|false||



## loot - Nr: 4

Drops the given loot table into the world

```mcfunction
loot insert <position x: coordinate> <position y: coordinate> <position z: coordinate> kill <entity target: selector> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`insert`|keyword|true||
|`position x`|coordinate|true||
|`position y`|coordinate|true||
|`position z`|coordinate|true||
|`kill`|keyword|true||
|`entity target`|selector|true||
|`item`|item|false||



## loot - Nr: 5

Drops the given loot table into the world

```mcfunction
loot insert <position x: coordinate> <position y: coordinate> <position z: coordinate> kill <entity target: selector> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`insert`|keyword|true||
|`position x`|coordinate|true||
|`position y`|coordinate|true||
|`position z`|coordinate|true||
|`kill`|keyword|true||
|`entity target`|selector|true||
|`tool`|handType|false||



## loot - Nr: 6

Drops the given loot table into the world

```mcfunction
loot insert <position x: coordinate> <position y: coordinate> <position z: coordinate> loot <loot table: lootTable> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`insert`|keyword|true||
|`position x`|coordinate|true||
|`position y`|coordinate|true||
|`position z`|coordinate|true||
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`item`|item|false||



## loot - Nr: 7

Drops the given loot table into the world

```mcfunction
loot insert <position x: coordinate> <position y: coordinate> <position z: coordinate> loot <loot table: lootTable> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`insert`|keyword|true||
|`position x`|coordinate|true||
|`position y`|coordinate|true||
|`position z`|coordinate|true||
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`tool`|handType|false||



## loot - Nr: 8

Drops the given loot table into the world

```mcfunction
loot replace block <x: coordinate> <y: coordinate> <z: coordinate> <slot type: slotType> <slot id: slotID> kill <entity target: selector> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`block`|keyword|true||
|`x`|coordinate|true||
|`y`|coordinate|true||
|`z`|coordinate|true||
|`slot type`|slotType|true|Accepted values:<br/>- `slot.container`<br/>|
|`slot id`|slotID|true||
|`kill`|keyword|true||
|`entity target`|selector|true||
|`item`|item|false||



## loot - Nr: 9

Drops the given loot table into the world

```mcfunction
loot replace block <x: coordinate> <y: coordinate> <z: coordinate> <slot type: slotType> <slot id: slotID> kill <entity target: selector> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`block`|keyword|true||
|`x`|coordinate|true||
|`y`|coordinate|true||
|`z`|coordinate|true||
|`slot type`|slotType|true|Accepted values:<br/>- `slot.container`<br/>|
|`slot id`|slotID|true||
|`kill`|keyword|true||
|`entity target`|selector|true||
|`tool`|handType|false||



## loot - Nr: 10

Drops the given loot table into the world

```mcfunction
loot replace block <x: coordinate> <y: coordinate> <z: coordinate> <slot type: slotType> <slot id: slotID> <count: integer> kill <entity target: selector> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`block`|keyword|true||
|`x`|coordinate|true||
|`y`|coordinate|true||
|`z`|coordinate|true||
|`slot type`|slotType|true|Accepted values:<br/>- `slot.container`<br/>|
|`slot id`|slotID|true||
|`count`|integer|true||
|`kill`|keyword|true||
|`entity target`|selector|true||
|`item`|item|false||



## loot - Nr: 11

Drops the given loot table into the world

```mcfunction
loot replace block <x: coordinate> <y: coordinate> <z: coordinate> <slot type: slotType> <slot id: slotID> <count: integer> kill <entity target: selector> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`block`|keyword|true||
|`x`|coordinate|true||
|`y`|coordinate|true||
|`z`|coordinate|true||
|`slot type`|slotType|true|Accepted values:<br/>- `slot.container`<br/>|
|`slot id`|slotID|true||
|`count`|integer|true||
|`kill`|keyword|true||
|`entity target`|selector|true||
|`tool`|handType|false||



## loot - Nr: 12

Drops the given loot table into the world

```mcfunction
loot replace block <x: coordinate> <y: coordinate> <z: coordinate> <slot type: slotType> <slot id: slotID> loot <loot table: lootTable> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`block`|keyword|true||
|`x`|coordinate|true||
|`y`|coordinate|true||
|`z`|coordinate|true||
|`slot type`|slotType|true|Accepted values:<br/>- `slot.container`<br/>|
|`slot id`|slotID|true||
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`item`|item|false||



## loot - Nr: 13

Drops the given loot table into the world

```mcfunction
loot replace block <x: coordinate> <y: coordinate> <z: coordinate> <slot type: slotType> <slot id: slotID> loot <loot table: lootTable> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`block`|keyword|true||
|`x`|coordinate|true||
|`y`|coordinate|true||
|`z`|coordinate|true||
|`slot type`|slotType|true|Accepted values:<br/>- `slot.container`<br/>|
|`slot id`|slotID|true||
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`tool`|handType|false||



## loot - Nr: 14

Drops the given loot table into the world

```mcfunction
loot replace block <x: coordinate> <y: coordinate> <z: coordinate> <slot type: slotType> <slot id: slotID> <count: integer> loot <loot table: lootTable> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`block`|keyword|true||
|`x`|coordinate|true||
|`y`|coordinate|true||
|`z`|coordinate|true||
|`slot type`|slotType|true|Accepted values:<br/>- `slot.container`<br/>|
|`slot id`|slotID|true||
|`count`|integer|true||
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`item`|item|false||



## loot - Nr: 15

Drops the given loot table into the world

```mcfunction
loot replace block <x: coordinate> <y: coordinate> <z: coordinate> <slot type: slotType> <slot id: slotID> <count: integer> loot <loot table: lootTable> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`block`|keyword|true||
|`x`|coordinate|true||
|`y`|coordinate|true||
|`z`|coordinate|true||
|`slot type`|slotType|true|Accepted values:<br/>- `slot.container`<br/>|
|`slot id`|slotID|true||
|`count`|integer|true||
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`tool`|handType|false||



## loot - Nr: 16

Drops the given loot table into the world

```mcfunction
loot replace entity <target: selector> <slot type: slotType> <slot id: slotID> kill <entity target: selector> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`entity`|keyword|true||
|`target`|selector|true||
|`slot type`|slotType|true||
|`slot id`|slotID|true||
|`kill`|keyword|true||
|`entity target`|selector|true||
|`item`|item|false||



## loot - Nr: 17

Drops the given loot table into the world

```mcfunction
loot replace entity <target: selector> <slot type: slotType> <slot id: slotID> kill <entity target: selector> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`entity`|keyword|true||
|`target`|selector|true||
|`slot type`|slotType|true||
|`slot id`|slotID|true||
|`kill`|keyword|true||
|`entity target`|selector|true||
|`tool`|handType|false||



## loot - Nr: 18

Drops the given loot table into the world

```mcfunction
loot replace entity <target: selector> <slot type: slotType> <slot id: slotID> <count: integer> kill <entity target: selector> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`entity`|keyword|true||
|`target`|selector|true||
|`slot type`|slotType|true||
|`slot id`|slotID|true||
|`count`|integer|true||
|`kill`|keyword|true||
|`entity target`|selector|true||
|`item`|item|false||



## loot - Nr: 19

Drops the given loot table into the world

```mcfunction
loot replace entity <target: selector> <slot type: slotType> <slot id: slotID> <count: integer> kill <entity target: selector> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`entity`|keyword|true||
|`target`|selector|true||
|`slot type`|slotType|true||
|`slot id`|slotID|true||
|`count`|integer|true||
|`kill`|keyword|true||
|`entity target`|selector|true||
|`tool`|handType|false||



## loot - Nr: 20

Drops the given loot table into the world

```mcfunction
loot replace entity <target: selector> <slot type: slotType> <slot id: slotID> loot <loot table: lootTable> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`entity`|keyword|true||
|`target`|selector|true||
|`slot type`|slotType|true||
|`slot id`|slotID|true||
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`item`|item|false||



## loot - Nr: 21

Drops the given loot table into the world

```mcfunction
loot replace entity <target: selector> <slot type: slotType> <slot id: slotID> loot <loot table: lootTable> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`entity`|keyword|true||
|`target`|selector|true||
|`slot type`|slotType|true||
|`slot id`|slotID|true||
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`tool`|handType|false||



## loot - Nr: 22

Drops the given loot table into the world

```mcfunction
loot replace entity <target: selector> <slot type: slotType> <slot id: slotID> <count: integer> loot <loot table: lootTable> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`entity`|keyword|true||
|`target`|selector|true||
|`slot type`|slotType|true||
|`slot id`|slotID|true||
|`count`|integer|true||
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`item`|item|false||



## loot - Nr: 23

Drops the given loot table into the world

```mcfunction
loot replace entity <target: selector> <slot type: slotType> <slot id: slotID> <count: integer> loot <loot table: lootTable> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`replace`|keyword|true||
|`entity`|keyword|true||
|`target`|selector|true||
|`slot type`|slotType|true||
|`slot id`|slotID|true||
|`count`|integer|true||
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`tool`|handType|false||



## loot - Nr: 24

Drops the given loot table into the world

```mcfunction
loot spawn <position x: coordinate> <position y: coordinate> <position z: coordinate> kill <entity target: selector> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`spawn`|keyword|true||
|`position x`|coordinate|true||
|`position y`|coordinate|true||
|`position z`|coordinate|true||
|`kill`|keyword|true||
|`entity target`|selector|true||
|`item`|item|false||



## loot - Nr: 25

Drops the given loot table into the world

```mcfunction
loot spawn <position x: coordinate> <position y: coordinate> <position z: coordinate> kill <entity target: selector> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`spawn`|keyword|true||
|`position x`|coordinate|true||
|`position y`|coordinate|true||
|`position z`|coordinate|true||
|`kill`|keyword|true||
|`entity target`|selector|true||
|`tool`|handType|false||



## loot - Nr: 26

Drops the given loot table into the world

```mcfunction
loot spawn <position x: coordinate> <position y: coordinate> <position z: coordinate> loot <loot table: lootTable> [item: item]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`spawn`|keyword|true||
|`position x`|coordinate|true||
|`position y`|coordinate|true||
|`position z`|coordinate|true||
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`item`|item|false||



## loot - Nr: 27

Drops the given loot table into the world

```mcfunction
loot spawn <position x: coordinate> <position y: coordinate> <position z: coordinate> loot <loot table: lootTable> [tool: handType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`loot`|keyword|true||
|`spawn`|keyword|true||
|`position x`|coordinate|true||
|`position y`|coordinate|true||
|`position z`|coordinate|true||
|`loot`|keyword|true||
|`loot table`|lootTable|true||
|`tool`|handType|false||

