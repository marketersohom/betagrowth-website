import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "generation-beta",
  title: "Generation Beta",
  projectId: "579x1r4t",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
