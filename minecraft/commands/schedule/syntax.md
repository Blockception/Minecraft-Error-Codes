# schedule

## schedule - Nr: 0

Schedules an action to be executed once an area is loaded, or after a certain amount of time

```mcfunction
schedule on_area_loaded add <from x: coordinate> <from y: coordinate> <from z: coordinate> <to x: coordinate> <to y: coordinate> <to z: coordinate> <function: function>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`schedule`|keyword|true||
|`on_area_loaded`|keyword|true||
|`add`|keyword|true||
|`from x`|coordinate|true||
|`from y`|coordinate|true||
|`from z`|coordinate|true||
|`to x`|coordinate|true||
|`to y`|coordinate|true||
|`to z`|coordinate|true||
|`function`|function|true||



## schedule - Nr: 1

Schedules an action to be executed once an area is loaded, or after a certain amount of time

```mcfunction
schedule on_area_loaded add circle <center x: coordinate> <center y: coordinate> <center z: coordinate> <radius: integer> <function: function>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`schedule`|keyword|true||
|`on_area_loaded`|keyword|true||
|`add`|keyword|true||
|`circle`|keyword|true||
|`center x`|coordinate|true||
|`center y`|coordinate|true||
|`center z`|coordinate|true||
|`radius`|integer|true||
|`function`|function|true||



## schedule - Nr: 2

Schedules an action to be executed once an area is loaded, or after a certain amount of time

```mcfunction
schedule on_area_loaded add tickingarea <tickingarea name: tickingarea> <function: function>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`schedule`|keyword|true||
|`on_area_loaded`|keyword|true||
|`add`|keyword|true||
|`tickingarea`|keyword|true||
|`tickingarea name`|tickingarea|true||
|`function`|function|true||

