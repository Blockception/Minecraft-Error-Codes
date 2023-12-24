import { CommandContainer, ParameterInfo, ParameterType, CommandData } from "bc-minecraft-bedrock-command";
import * as fs from "fs";
import path from "path";

export function doGen() {
  gen(CommandData.Vanilla);
  gen(CommandData.Edu, true);
}

function gen(data: CommandContainer, edu: boolean = false) {
  const names = Object.getOwnPropertyNames(data);

  names.forEach((name) => {
    const value = data[name];

    const dir = path.join(__dirname, "..", "..", "minecraft", "commands", name);
    console.log(dir);
    fs.mkdirSync(dir, { recursive: true });

    const file = path.join(dir, "syntax.md");

    let content = `# ${name}\n\n`;

    if (edu) {
      content += "> **This command is Education only**\n\n";
    }

    content += value
      .map((cmd, index) => {
        let result = `## ${cmd.name} - Nr: ${index}\n\n`;
        result += cmd.documentation + "\n\n";

        if (cmd.obsolete) {
          result += "\n\n> **This command is obsolete**\n\n";
        }

        result += "```mcfunction\n";
        result += cmd.parameters.map(parameterToString).join(" ") + "\n";
        result += "```\n\n";

        if (cmd.parameters.length > 0) {
          result += "|Parameter|Type|Required|Other|\n";
          result += "|:---|:---|:---|:---|\n";

          result += cmd.parameters
            .map((par) => {
              let result = `|\`${par.text}\`|${ParameterType[par.type]}|${par.required}|${parameterOther(par)}|`;

              return result;
            })
            .join("\n");

          result += "\n\n";
        }

        return result;
      })
      .join("\n\n");

    fs.writeFileSync(file, content);
  });
}

function parameterToString(data: ParameterInfo): string {
  switch (data.type) {
    case ParameterType.keyword:
      return data.text;
  }

  let p = data.text + ": ";
  const type = ParameterType[data.type];

  p += type;
  if (data.options) {
    if (data.options.minimum || data.options.maximum) {
      p += `[${data.options.minimum || ""}..${data.options.maximum || ""}]`;
    }
  }

  if (data.required) {
    p = `<${p}>`;
  } else {
    p = `[${p}]`;
  }

  return p;
}

function parameterOther(data: ParameterInfo): string {
  let result = "";

  const options = data.options;
  if (options) {
    if (options.acceptedValues) {
      result += `Accepted values:<br/>` + options.acceptedValues.map((p) => `- \`${p}\``).join("<br/>") + "<br/>";
    }

    if (options.minimum || options.maximum) {
      result += `Range: ${options.minimum || ""}..${options.maximum || ""}`;
    }

    if (options.wildcard) {
      result += `Wildcard: \`*\` allowed<br/>`;
    }

    if (typeof options.allowFakePlayers === "boolean") {
      if (options.allowFakePlayers === true) {
        result += `Fake players allowed<br/>`;
      } else {
        result += `Fake players disallowed<br/>`;
      }
    }

    if (typeof options.playerOnly === "boolean") {
      if (options.playerOnly === true) {
        result += `Only players allowed<br/>`;
      }
    }
  }

  return result;
}
