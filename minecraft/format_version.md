# Minecraft - Format Version

`minecraft.format_version`

**Severity:** error | warning

## Description

The `format_version` field in a Minecraft Bedrock JSON file is invalid, missing, or out of date. The format version controls which features and syntax are available in the file.

## What triggers this error

This error is triggered by the language server when:

- The `format_version` field is not a string (e.g., it's a number or an array)
- The version string is not in the correct `major.minor.patch` format
- The version specified is not a recognized Minecraft Bedrock version
- The version is older than the recommended minimum for the file type

Source: `packages/bedrock-diagnoser/src/diagnostics/general/format-version.ts`

## What is a format version?

A Minecraft format version is a string of three numbers — the major version, followed by the minor version, followed by the patch version, all separated by dots:

```
"<major>.<minor>.<patch>"
```

For example: `"1.21.0"`, `"1.16.100"`, `"1.10.0"`

## Example

The following triggers an error because the format version is a number, not a string:

```jsonc
{
  "format_version": 1.16,  // Invalid — must be a string
  "minecraft:entity": { ... }
}
```

The following triggers a warning because the version is outdated:

```jsonc
{
  "format_version": "1.8.0",  // Warning — very old format version
  "minecraft:entity": { ... }
}
```

## How to fix

Ensure the `format_version` is a valid string in `major.minor.patch` format. Use a version that is appropriate for the features you are using:

```jsonc
{
  "format_version": "1.21.0",
  "minecraft:entity": { ... }
}
```

Use the same format version as the current version of Minecraft Bedrock, or the minimum version required by the features your file uses. Refer to the [Minecraft Bedrock documentation](https://learn.microsoft.com/en-us/minecraft/creator/) for recommended format versions per file type.

## Related errors

- [behaviorpack.manifest.min_engine_version](../../behaviorpack/manifest/min_engine_version.md)
- [minecraft.manifest.version.minimum](../manifest/version/minimum.md)

