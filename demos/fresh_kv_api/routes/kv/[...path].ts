import { Handlers } from "$fresh/server.ts";
import { generateFreshHandlers } from "../../../../mod.ts";

export const handler: Handlers = generateFreshHandlers({
  prefix: "/kv",
});
