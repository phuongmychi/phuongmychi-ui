/* eslint-disable import/no-anonymous-default-export */
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const packageJson = require("./package.json");

export default {
  input: "src/index.tsx",
  output: {
    file: packageJson.module,
    format: "esm",
  },
  plugins: [
    resolve(),
    babel({
      runtimeHelpers: true,
      presets: ["@babel/preset-react"],
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    nodeResolve({
      extensions: [".css"],
    }),
  ],
  external: [/node_modules/],
};
