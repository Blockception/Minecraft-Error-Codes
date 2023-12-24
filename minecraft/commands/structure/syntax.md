# structure

## structure - Nr: 0

Saves the given area into a structure.

```mcfunction
structure save <name: structure> <from x: coordinate> <from y: coordinate> <from z: coordinate> <to x: coordinate> <to y: coordinate> <to z: coordinate> [save mode: saveMode]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`structure`|keyword|true||
|`save`|keyword|true||
|`name`|structure|true||
|`from x`|coordinate|true||
|`from y`|coordinate|true||
|`from z`|coordinate|true||
|`to x`|coordinate|true||
|`to y`|coordinate|true||
|`to z`|coordinate|true||
|`save mode`|saveMode|false||



## structure - Nr: 1

Saves the given area into a structure.

```mcfunction
structure save <name: structure> <from x: coordinate> <from y: coordinate> <from z: coordinate> <to x: coordinate> <to y: coordinate> <to z: coordinate> [include entities: boolean] [save mode: saveMode] [include blocks: boolean]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`structure`|keyword|true||
|`save`|keyword|true||
|`name`|structure|true||
|`from x`|coordinate|true||
|`from y`|coordinate|true||
|`from z`|coordinate|true||
|`to x`|coordinate|true||
|`to y`|coordinate|true||
|`to z`|coordinate|true||
|`include entities`|boolean|false||
|`save mode`|saveMode|false||
|`include blocks`|boolean|false||



## structure - Nr: 2

Loads a structure to the world.

```mcfunction
structure load <name: structure> <to x: coordinate> <to y: coordinate> <to z: coordinate> [rotation: rotation] [mirror: mirror] [include entities: boolean] [include blocks: boolean] [water logged blocks: boolean] [integrity: float] [seed: string]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`structure`|keyword|true||
|`load`|keyword|true||
|`name`|structure|true||
|`to x`|coordinate|true||
|`to y`|coordinate|true||
|`to z`|coordinate|true||
|`rotation`|rotation|false||
|`mirror`|mirror|false||
|`include entities`|boolean|false||
|`include blocks`|boolean|false||
|`water logged blocks`|boolean|false||
|`integrity`|float|false||
|`seed`|string|false||



## structure - Nr: 3

Loads a structure to the world.

```mcfunction
structure load <name: structure> <to x: coordinate> <to y: coordinate> <to z: coordinate> [rotation: rotation] [mirror: mirror] [animation mode: structureAnimationMode] [animation seconds: float] [include entities: boolean] [include blocks: boolean] [water logged blocks: boolean] [integrity: float] [seed: string]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`structure`|keyword|true||
|`load`|keyword|true||
|`name`|structure|true||
|`to x`|coordinate|true||
|`to y`|coordinate|true||
|`to z`|coordinate|true||
|`rotation`|rotation|false||
|`mirror`|mirror|false||
|`animation mode`|structureAnimationMode|false||
|`animation seconds`|float|false||
|`include entities`|boolean|false||
|`include blocks`|boolean|false||
|`water logged blocks`|boolean|false||
|`integrity`|float|false||
|`seed`|string|false||



## structure - Nr: 4

Removes the structure from the contents.

```mcfunction
structure delete <name: structure>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`structure`|keyword|true||
|`delete`|keyword|true||
|`name`|structure|true||

