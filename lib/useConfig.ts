import fs from "node:fs/promises";

export async function readConfig() {
  const configFileContent = await fs.readFile("configData.json", "utf-8");
  const config = JSON.parse(configFileContent);
  return config;
}

export async function readKeyConfig(key: string) {
  const configFileContent = await fs.readFile("configData.json", "utf-8");
  const config = JSON.parse(configFileContent);
  const keyConfig = config[key];
  return keyConfig;
}

export async function saveConfig(newConfig: {}, key: string) {
  const configFileContent = await fs.readFile("configData.json", "utf-8");
  const config = JSON.parse(configFileContent);
  config[key] = newConfig;

  await fs.writeFile("configData.json", JSON.stringify(config));
}
