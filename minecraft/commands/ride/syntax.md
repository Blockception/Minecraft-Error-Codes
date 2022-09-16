# ride

## ride - Nr: 0

Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders

```mcfunction
ride <riders: selector> start_riding <ride: selector> [teleport: teleportRules] [fill mode: ridefillMode]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`ride`|keyword|true||
|`riders`|selector|true||
|`start_riding`|keyword|true||
|`ride`|selector|true||
|`teleport`|teleportRules|false||
|`fill mode`|ridefillMode|false||



## ride - Nr: 1

Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders

```mcfunction
ride <riders: selector> stop_riding
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`ride`|keyword|true||
|`riders`|selector|true||
|`stop_riding`|keyword|true||



## ride - Nr: 2

Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders

```mcfunction
ride <rides: selector> evict_riders
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`ride`|keyword|true||
|`rides`|selector|true||
|`evict_riders`|keyword|true||



## ride - Nr: 3

Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders

```mcfunction
ride <riders: selector> summon_ride <entity type: entity> <ride rules: rideRules> <event: event> <name: string>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`ride`|keyword|true||
|`riders`|selector|true||
|`summon_ride`|keyword|true||
|`entity type`|entity|true||
|`ride rules`|rideRules|true||
|`event`|event|true||
|`name`|string|true||



## ride - Nr: 4

Makes entities ride other entities, stops entities from riding, makes rides evict their riders, or summons rides or riders

```mcfunction
ride <rides: selector> summon_rider <entity type: entity> <event: event> <name: string>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`ride`|keyword|true||
|`rides`|selector|true||
|`summon_rider`|keyword|true||
|`entity type`|entity|true||
|`event`|event|true||
|`name`|string|true||

