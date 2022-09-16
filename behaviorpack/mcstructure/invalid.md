# Mcstructure - Invalid

`behaviorpack.mcstructure.invalid`

possible errors:

## Missing quotes

structures with a slash need "" for minecraft to read

```mcfunction

## This will lead to an error
structure example:test/foo ~ ~ ~ 

## Correct
structure "example:test/foo" ~ ~ ~ 
```