module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    ["import", {
      "libraryName": "muse-ui",
      "libraryDirectory": "lib",
      "camel2DashComponentName": false
    }],
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
