# Tag - Missing

`minecraft.tag.missing`

The diagnostics tool considers whether or not a tag has been given to the entity. Thus, it's looking for a tag "definition", a place where the tag has been assigned to any type of entity.


**Examples**

```mcfunction
# Proper tag definition
tag @e add tag
```

If a tag already exists on an existing entity in the world that is never specified in code. or through commands blocks you can use the [`.mcdefinitions`](https://faq.blockception.dev/mcproject/mcdefinitions) at the root of your workspace:

```ini
tag=IAmATag
```
