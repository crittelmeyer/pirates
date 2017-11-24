const _ = require('lodash') // eslint-disable-line
const fs = require('fs')
const path = require('path')

module.exports = {
  locals: (options) => ({ selectorPath: options.entity.name.replace(/\//g, '.') }),

  fileMapTokens: function(options) {
    const pathNodes = _.split(options.entity.name, '/')

    return {
      __state__: () => `redux/state/${pathNodes.slice(0, -1).join('/')}`,
      __name__: () => _.last(_.split(options.entity.name, '/'))
    }
  },

  afterInstall: function(options) {
    const { sourceBase, statePath } = options.settings.settings
    const pathNodes = _.split(options.entity.name, '/')
    const selectorName = _.last(pathNodes)
    const selectorPath = `${sourceBase}/${statePath}/${pathNodes.slice(0, -1).join('/')}`

    // update selectors index
    fs.appendFileSync(
      `${selectorPath}/selectors.js`,
      `export * from './selectors/${selectorName}'\n`
    )

    // TODO: update README
  }
}
