# Debugger - Internal Exception

`debugger.internal.exception`

**Severity:** error

## Description

An unexpected internal exception occurred while the language server was diagnosing your files. This is a bug in the language server itself, not an error in your Minecraft content.

## What triggers this error

This error is triggered when the language server's diagnostic engine encounters an unhandled exception during processing. This can happen when:

- A file has an unusual or unexpected structure that causes the diagnoser to crash
- A bug in the language server's validation logic is triggered
- Memory or resource constraints are hit during diagnosis

This error is rarely caused by issues with your content, but the file or content that triggered it may be a useful clue for bug reports.

## Example

This error cannot be reliably reproduced with a specific code example, as it reflects an internal crash in the language server.

## How to fix

1. **Restart the language server** — In VS Code, use the command palette (`Ctrl+Shift+P`) and run `Restart Extension Host` or reload the window
2. **Check for corrupt files** — The file that was being processed when the exception occurred may be corrupt or have an unusual encoding. Try re-saving it
3. **Report the bug** — If the error persists, please report it to the [Blockception/minecraft-bedrock-language-server](https://github.com/Blockception/minecraft-bedrock-language-server/issues) repository with details about which file triggered the exception

## Related errors

- [diagnostics.components.internal.error](../../diagnostics/components/internal/error.md)
