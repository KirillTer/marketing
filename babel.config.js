module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["styled-components", { ssr: true }],
    [
      "module-resolver",
      {
        alias: {
          components: "./components",
          slices: "./slices",
          lib: "./lib",
          "@prismic-config": "./lib/prismic.config.js",
        },
      },
    ],
  ],
}
