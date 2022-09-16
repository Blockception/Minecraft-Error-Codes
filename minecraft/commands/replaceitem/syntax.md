# replaceitem

## replaceitem - Nr: 0

Replaces items in inventories.

```mcfunction
replaceitem block <position x: coordinate> <position y: coordinate> <position z: coordinate> slot.container <slot id: slotID> <item name: item> amount data components
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`replaceitem`|keyword|true||
|`block`|keyword|true||
|`position x`|coordinate|true||
|`position y`|coordinate|true||
|`position z`|coordinate|true||
|`slot.container`|keyword|true||
|`slot id`|slotID|true||
|`item name`|item|true||
|`amount`|keyword|false||
|`data`|keyword|false||
|`components`|keyword|false||



## replaceitem - Nr: 1

Replaces items in inventories.

```mcfunction
replaceitem block <position x: coordinate> <position y: coordinate> <position z: coordinate> slot.container <slotId: slotID> <replacemode: replaceMode> <item name: item> amount data components
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`replaceitem`|keyword|true||
|`block`|keyword|true||
|`position x`|coordinate|true||
|`position y`|coordinate|true||
|`position z`|coordinate|true||
|`slot.container`|keyword|true||
|`slotId`|slotID|true||
|`replacemode`|replaceMode|true||
|`item name`|item|true||
|`amount`|keyword|false||
|`data`|keyword|false||
|`components`|keyword|false||



## replaceitem - Nr: 2

Replaces items in inventories.

```mcfunction
replaceitem entity <selector: selector> <slot.container: slotType> <slotId: slotID> <item name: item> [amount: integer] [data: integer] [components: jsonItem]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`replaceitem`|keyword|true||
|`entity`|keyword|true||
|`selector`|selector|true||
|`slot.container`|slotType|true||
|`slotId`|slotID|true||
|`item name`|item|true||
|`amount`|integer|false||
|`data`|integer|false||
|`components`|jsonItem|false||



## replaceitem - Nr: 3

Replaces items in inventories.

```mcfunction
replaceitem entity <selector: selector> <slot type: slotType> <slot id: slotID> <replace mode: replaceMode> <item name: item> [amount: integer] [data: integer] [components: jsonItem]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`replaceitem`|keyword|true||
|`entity`|keyword|true||
|`selector`|selector|true||
|`slot type`|slotType|true||
|`slot id`|slotID|true||
|`replace mode`|replaceMode|true||
|`item name`|item|true||
|`amount`|integer|false||
|`data`|integer|false||
|`components`|jsonItem|false||

