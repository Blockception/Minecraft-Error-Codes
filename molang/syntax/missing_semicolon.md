# Missing Semicolon

Certain statements within molang require a semicolon at the end of the statement. If a semicolon is not present, this error will be thrown.

```diff
-"variable.example=1"
+"variable.example=1;"

-"variable.foo=1;variable.bar=2"
+"variable.foo=1;variable.bar=2;"
```