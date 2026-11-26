const { readdirSync, readFileSync } = require("node:fs");
const ts = require("typescript");

require.extensions[".ts"] = (module, filename) => {
  const source = readFileSync(filename, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true, target: ts.ScriptTarget.ES2017 }
  });
  module._compile(outputText, filename);
};

for (const name of readdirSync(__dirname).filter((file) => file.endsWith(".test.ts")).sort()) {
  require(`./${name}`);
}
