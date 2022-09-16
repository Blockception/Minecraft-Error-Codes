# dialogue

## dialogue - Nr: 0

Forces to open an NPC dialogue box to the targeted player(s)

```mcfunction
dialogue open <npc: selector> <player receiver: selector> [scene name: string]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`dialogue`|keyword|true||
|`open`|keyword|true||
|`npc`|selector|true|Fake players disallowed<br/>|
|`player receiver`|selector|true|Fake players disallowed<br/>Only players allowed<br/>|
|`scene name`|string|false||



## dialogue - Nr: 1

Direct an NPC to use the dialogue provided in a specifically designated scene file

```mcfunction
dialogue change <npc: selector> <scene name: string> [player receiver: selector]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`dialogue`|keyword|true||
|`change`|keyword|true||
|`npc`|selector|true|Fake players disallowed<br/>|
|`scene name`|string|true||
|`player receiver`|selector|false|Fake players disallowed<br/>Only players allowed<br/>|

