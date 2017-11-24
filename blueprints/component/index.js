const _ = require('lodash') // eslint-disable-line
const fs = require('fs')

module.exports = {
  fileMapTokens: (options) => ({ __stories__: () => `${options.settings.settings.storyPath}/` }),

  afterInstall: function(options) {
    // update selectors index
    fs.appendFileSync(
      `${options.settings.settings.storyPath}/docs/Components/index.js`,
      `import './${options.entity.name}'\n`
    )

    // update relevant README(s)
  }
};
