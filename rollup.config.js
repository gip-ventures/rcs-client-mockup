import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// Use require for package.json
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // peerDepsExternal should be first to mark peer deps as external
      peerDepsExternal(),
      resolve({
        // Don't bundle node_modules for peer dependencies
        resolveOnly: (module) => {
          // Only resolve modules that are NOT peer dependencies
          return !['react', 'react-dom', 'lucide-react'].includes(module);
        },
      }),
      commonjs(),
      typescript({ 
        tsconfig: "./tsconfig.json",
        exclude: ["**/__tests__/**", "**/*.test.ts", "**/*.test.tsx"]
      }),
      postcss({
        extract: true,
        minimize: true,
        extensions: ['.css'],
        plugins: [require('@tailwindcss/postcss'), require('autoprefixer')],
      }),
      terser(),
    ],
    // Explicitly mark all React-related imports as external
    external: [
      'react', 
      'react-dom', 
      'react/jsx-runtime', 
      'react/jsx-dev-runtime',
      'lucide-react'
    ],
  },
  {
    input: "src/main.css",
    output: [{ file: "dist/index.css", format: "es" }],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        extensions: ['.css'],
        plugins: [require('@tailwindcss/postcss'), require('autoprefixer')],
      }),
    ],
  },
];