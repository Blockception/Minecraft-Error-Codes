# Execute

The old execute syntax

## Execute - Nr: 0

Executes another command.

```mcfunction
execute <origin: selector> <position x: coordinate> <position y: coordinate> <position z: coordinate> <command: command>
```

| Parameter    | Type       | Required | Other |
| :----------- | :--------- | :------- | :---- |
| `execute`    | keyword    | true     |       |
| `origin`     | selector   | true     |       |
| `position x` | coordinate | true     |       |
| `position y` | coordinate | true     |       |
| `position z` | coordinate | true     |       |
| `command`    | command    | true     |       |



## Execute - Nr: 1

Executes another command.

```mcfunction
execute <origin: selector> <position x: coordinate> <position y: coordinate> <position z: coordinate> detect <detectPos x: coordinate> <detectPos y: coordinate> <detectPos z: coordinate> <block: block> <data: integer> <command: command>
```

| Parameter     | Type       | Required | Other |
| :------------ | :--------- | :------- | :---- |
| `execute`     | keyword    | true     |       |
| `origin`      | selector   | true     |       |
| `position x`  | coordinate | true     |       |
| `position y`  | coordinate | true     |       |
| `position z`  | coordinate | true     |       |
| `detect`      | keyword    | true     |       |
| `detectPos x` | coordinate | true     |       |
| `detectPos y` | coordinate | true     |       |
| `detectPos z` | coordinate | true     |       |
| `block`       | block      | true     |       |
| `data`        | integer    | true     |       |
| `command`     | command    | true     |       |

