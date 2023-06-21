import { Handlers } from "$fresh/server.ts";
import generateHandlers from "../../../../fresh.ts";

export const handler: Handlers = generateHandlers({
  prefix: "kv",
});
