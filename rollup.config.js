/* eslint-disable import/no-anonymous-default-export */
import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import react from "react";
import reactDom from "react-dom";

export default [
  {
    input: "./src/index.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      commonjs({
        namedExports: {
          react: Object.keys(react),
          "react-dom": Object.keys(reactDom),
        },
      }),

      typescript({ useTsconfigDeclarationDir: true }),
      external(),
      resolve(),
      terser(),
    ],
    external: [/node_modules/],
  },
];
