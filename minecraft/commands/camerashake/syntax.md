# camerashake

## camerashake - Nr: 0

Applies shaking to the players' camera with specified intensity and duration

```mcfunction
camerashake add <player: selector> [intensity: float[..4]] [seconds: float] [shake type: cameraShakeType]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`camerashake`|keyword|true||
|`add`|keyword|true||
|`player`|selector|true|Only players allowed<br/>|
|`intensity`|float|false|Range: ..4|
|`seconds`|float|false||
|`shake type`|cameraShakeType|false||



## camerashake - Nr: 1

Stops shaking to the players' camera with specified intensity and duration

```mcfunction
camerashake stop [player: selector]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`camerashake`|keyword|true||
|`stop`|keyword|true||
|`player`|selector|false|Only players allowed<br/>|

