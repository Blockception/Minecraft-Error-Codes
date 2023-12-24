# inputpermission

## inputpermission - Nr: 0

Queries the status of an input permission

```mcfunction
inputpermission query <target: selector> <permission: permission> [state: permissionState]
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`inputpermission`|keyword|true||
|`query`|keyword|true||
|`target`|selector|true|Only players allowed<br/>|
|`permission`|permission|true||
|`state`|permissionState|false||



## inputpermission - Nr: 1

Sets whether or not a player's input can affect their character

```mcfunction
inputpermission set <target: selector> <permission: permission> <state: permissionState>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`inputpermission`|keyword|true||
|`set`|keyword|true||
|`target`|selector|true|Only players allowed<br/>|
|`permission`|permission|true||
|`state`|permissionState|true||

