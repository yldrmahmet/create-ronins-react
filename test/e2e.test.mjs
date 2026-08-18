import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { after, describe, test } from "node:test";
import { fileURLToPath } from "node:url";

// The stubbed suite proves our own logic. This one proves the command we send
// still matches what create-vite actually accepts, so it needs the network and
// a real package manager. Opt in with RONINS_E2E=1.
const enabled = process.env.RONINS_E2E === "1";
const CLI_PATH = join(dirname(fileURLToPath(import.meta.url)), "..", "index.js");
const PACKAGE_MANAGER = process.env.RONINS_E2E_PM ?? "bun";

describe("real create-vite run", { skip: enabled ? false : "set RONINS_E2E=1 to run" }, () => {
  const workDir = mkdtempSync(join(tmpdir(), "ronins-cli-e2e-"));
  after(() => rmSync(workDir, { recursive: true, force: true }));

  test(`scaffolds a working React project with ${PACKAGE_MANAGER}`, () => {
    // --yes keeps it non-interactive: the package manager may be missing here,
    // and installing it is part of what this test covers.
    const result = spawnSync(process.execPath, [CLI_PATH, "e2e-app", "--pm", PACKAGE_MANAGER, "--yes"], {
      cwd: workDir,
      encoding: "utf8",
      timeout: 180_000,
    });

    assert.equal(result.status, 0, result.stdout + result.stderr);

    const projectDir = join(workDir, "e2e-app");
    const manifest = JSON.parse(readFileSync(join(projectDir, "package.json"), "utf8"));
    assert.equal(manifest.name, "e2e-app");
    assert.ok(manifest.devDependencies.vite, "vite should be a dependency of the new project");
    assert.ok(manifest.dependencies.react, "react should be a dependency of the new project");
    assert.ok(existsSync(join(projectDir, "tsconfig.json")), "expected a TypeScript project");
    assert.ok(existsSync(join(projectDir, ".oxlintrc.json")), "expected Oxlint, not ESLint");

    assert.ok(!existsSync(join(projectDir, "src", "App.css")), "demo styles should be gone");
    assert.ok(!existsSync(join(projectDir, "src", "assets")), "demo assets should be gone");
    assert.equal(readFileSync(join(projectDir, "src", "index.css"), "utf8"), "");
    assert.match(readFileSync(join(projectDir, "src", "App.tsx"), "utf8"), /<h1>e2e-app<\/h1>/);
  });
});
