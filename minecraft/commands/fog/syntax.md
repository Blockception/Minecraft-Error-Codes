# fog

## fog - Nr: 0

Pushes a new fog setting, to specified player(s), along with a user provided ID, onto the top of the Fog Command layers of the players' active fog stacks.

```mcfunction
fog <victim: selector> push <fog id: string> <user provided id: string>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`fog`|keyword|true||
|`victim`|selector|true||
|`push`|keyword|true||
|`fog id`|string|true||
|`user provided id`|string|true||



## fog - Nr: 1

Removes the top-most fog setting, from selected player(s), that matches the user provided ID (i.e. as provided previously via a "/fog push" command).

```mcfunction
fog <victim: selector> pop <user provided id: string>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`fog`|keyword|true||
|`victim`|selector|true||
|`pop`|keyword|true||
|`user provided id`|string|true||



## fog - Nr: 2

Removes all matching fog settings, from the selected player(s), that matches the user-provided ID (i.e. as provided previously via one or more "/fog push" commands).

```mcfunction
fog <victim: selector> remove <user provided id: string>
```

|Parameter|Type|Required|Other|
|:---|:---|:---|:---|
|`fog`|keyword|true||
|`victim`|selector|true||
|`remove`|keyword|true||
|`user provided id`|string|true||

