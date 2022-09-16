# scoreboard

## scoreboard - Nr: 0

Add a new objective to the scoreboard.

```mcfunction
scoreboard objectives add <name: objective> dummy [display name: string]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`objectives`|keyword|true||
|`add`|keyword|true||
|`name`|objective|true||
|`dummy`|keyword|true||
|`display name`|string|false||



## scoreboard - Nr: 1

Display a list of objectives.

```mcfunction
scoreboard objectives list
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`objectives`|keyword|true||
|`list`|keyword|true||



## scoreboard - Nr: 2

Removes the given objective from chat.

```mcfunction
scoreboard objectives remove <name: objective>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`objectives`|keyword|true||
|`remove`|keyword|true||
|`name`|objective|true||



## scoreboard - Nr: 3

Sets the objective on the list.

```mcfunction
scoreboard objectives setdisplay list [objective: objective] ascending
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`objectives`|keyword|true||
|`setdisplay`|keyword|true||
|`list`|keyword|true||
|`objective`|objective|false||
|`ascending`|keyword|false||



## scoreboard - Nr: 4

Sets the objective on the list.

```mcfunction
scoreboard objectives setdisplay list [objective: objective] descending
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`objectives`|keyword|true||
|`setdisplay`|keyword|true||
|`list`|keyword|true||
|`objective`|objective|false||
|`descending`|keyword|false||



## scoreboard - Nr: 5

Sets the objective on the sidebar.

```mcfunction
scoreboard objectives setdisplay sidebar [objective: objective] ascending
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`objectives`|keyword|true||
|`setdisplay`|keyword|true||
|`sidebar`|keyword|true||
|`objective`|objective|false||
|`ascending`|keyword|false||



## scoreboard - Nr: 6

Sets the objective on the sidebar.

```mcfunction
scoreboard objectives setdisplay sidebar [objective: objective] descending
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`objectives`|keyword|true||
|`setdisplay`|keyword|true||
|`sidebar`|keyword|true||
|`objective`|objective|false||
|`descending`|keyword|false||



## scoreboard - Nr: 7

Sets the objective under the name.

```mcfunction
scoreboard objectives setdisplay below_name [objective: objective]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`objectives`|keyword|true||
|`setdisplay`|keyword|true||
|`below_name`|keyword|true||
|`objective`|objective|false||



## scoreboard - Nr: 8

Adds the given value onto the specified entities.

```mcfunction
scoreboard players add <entity: selector> <objective: objective> <count: integer>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`players`|keyword|true||
|`add`|keyword|true||
|`entity`|selector|true|Fake players allowed<br/>|
|`objective`|objective|true||
|`count`|integer|true||



## scoreboard - Nr: 9

List values of the given entity and their scores.

```mcfunction
scoreboard players list [entity: selector]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`players`|keyword|true||
|`list`|keyword|true||
|`entity`|selector|false|Fake players allowed<br/>|



## scoreboard - Nr: 10

Executes a scoreboard operation between two entities.

```mcfunction
scoreboard players operation <destination: selector> <objective: objective> <operation: operation> <selector: selector> <objective: objective>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`players`|keyword|true||
|`operation`|keyword|true||
|`destination`|selector|true|Fake players allowed<br/>|
|`objective`|objective|true||
|`operation`|operation|true||
|`selector`|selector|true|Fake players allowed<br/>|
|`objective`|objective|true||



## scoreboard - Nr: 11

Generates a random value onto the given entity.

```mcfunction
scoreboard players random <entity: selector> <objective: objective> <min: integer> <max: integer>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`players`|keyword|true||
|`random`|keyword|true||
|`entity`|selector|true|Fake players allowed<br/>|
|`objective`|objective|true||
|`min`|integer|true||
|`max`|integer|true||



## scoreboard - Nr: 12

Substract a value from the given entities.

```mcfunction
scoreboard players remove <entity: selector> <objective: objective> <count: integer>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`players`|keyword|true||
|`remove`|keyword|true||
|`entity`|selector|true|Fake players allowed<br/>|
|`objective`|objective|true||
|`count`|integer|true||



## scoreboard - Nr: 13

Removes the scores from the given entities.

```mcfunction
scoreboard players reset <entity: selector> [objective: objective]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`players`|keyword|true||
|`reset`|keyword|true||
|`entity`|selector|true|Wildcard: `*` allowed<br/>Fake players allowed<br/>|
|`objective`|objective|false||



## scoreboard - Nr: 14

Sets the scores of the entities to a specific value.

```mcfunction
scoreboard players set <entity: selector> <objective: objective> <score: integer>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`players`|keyword|true||
|`set`|keyword|true||
|`entity`|selector|true|Fake players allowed<br/>|
|`objective`|objective|true||
|`score`|integer|true||



## scoreboard - Nr: 15

A test statement on wheter or not the entity has the specified value/range.

```mcfunction
scoreboard players test <entity: selector> <objective: objective> <min: integer> <max: integer>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`scoreboard`|keyword|true||
|`players`|keyword|true||
|`test`|keyword|true||
|`entity`|selector|true|Fake players allowed<br/>|
|`objective`|objective|true||
|`min`|integer|true|Wildcard: `*` allowed<br/>|
|`max`|integer|true|Wildcard: `*` allowed<br/>|

