# Resourcepack - Sound - load_on_low_memory

`resourcepack.sound.load_on_low_memory`

It is best, when using multiple sound, to mark one of them with `load_on_low_memory': true, and the others to false, this will reduce the amount of memory needed for lower tier devices

```json
"fx_foo": {
  "category": "neutral",
  "sounds": [
    { "load_on_low_memory": true, "name": "sounds/fx/foo1" },
    { "load_on_low_memory": false, "name": "sounds/fx/foo2" },
    { "load_on_low_memory": false, "name": "sounds/fx/foo3" },
    { "load_on_low_memory": false, "name": "sounds/fx/foo4" },
  ]
}
```
