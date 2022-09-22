# Selector - Attribute - Test - One Positive All Negatives

`minecraft.selector.attribute.test.one_positive_all_negatives`

Minecraft selector attributes allow for multiple definitions, as long as one of them is positive. and the other ones are negative.

**Examples**
```mcfunction
//Valid selectors
testfor @a[type=minecraft:sheep,type=!minecraft:cow,type=!minecraft:chicken]

//Invalid selectors
testfor @a[type=minecraft:sheep,type=minecraft:cow,type=minecraft:chicken]
```