SPM 模块和 node_modules 不同, 是以 `spm_modules/模块名/版本号/模块内容` 的形式存在。

个人感觉蛮奇怪。。不是很喜欢 SPM 。。。

Example:

```
var SPMWebpackPlugin = require('spm-webpack-plugin')

module.exports = {
  ...
, plugins: [
    new SPMWebpackPlugin()
  ]
}
```
