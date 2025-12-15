const { platform } = require("os");
const { spawnSync } = require("child_process");

if (platform() !== "linux") {
  console.log(
    "[postinstall] Skipping rollup native fetch (platform is not linux)."
  );
  process.exit(0);
}

console.log(
  "[postinstall] Installing @rollup/rollup-linux-x64-gnu for Netlify build..."
);
const result = spawnSync(
  "npm",
  ["install", "@rollup/rollup-linux-x64-gnu", "--no-save", "--ignore-scripts"],
  {
    stdio: "inherit",
  }
);
process.exit(result.status ?? 0);
