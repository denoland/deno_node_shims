///<reference path="../lib.deno.d.ts" />

import { tmpdir } from "node:os";
import { join } from "node:path";
import { randomId } from "../../internal/random_id.js";
import { writeTextFileSync } from "./writeTextFileSync.js";

export const makeTempFileSync: typeof Deno.makeTempFileSync =
  function makeTempFileSync(
    { prefix = "" } = {},
  ) {
    const name = join(tmpdir(), prefix, randomId());
    writeTextFileSync(name, "");
    return name;
  };
