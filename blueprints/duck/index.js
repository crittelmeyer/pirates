const _ = require('lodash') // eslint-disable-line
const fs = require('fs')
const path = require('path')

module.exports = {
  locals: function(options) {},

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
    const duckName = _.last(pathNodes)
    const duckPath = `${sourceBase}/${statePath}/${pathNodes.slice(0, -1).join('/')}`
    const getLineNumber = (searchText) => lines.reduce(
      (lastMatchingLine, line, index) => {
        if (line.indexOf(searchText) === 0) {
          return index
        }

        return lastMatchingLine
      },
      0
    )

    // update actions index
    fs.appendFileSync(
      `${duckPath}/actions.js`,
      `export * from './actions/${duckName}'\n`
    )

    // update reducers index
    const reducersIndex = fs.readFileSync(`${duckPath}/reducers.js`).toString()

    // read lines into array
    const lines = reducersIndex.split('\n');

    // store the import lines we want to inject
    const newImportLines = `
import { ${_.toUpper(_.snakeCase(duckName))} } from './actions/${duckName}'
import ${duckName}Reducer from './reducers/${duckName}Reducer'`

    // determine the line we want to inject at
    const importLineNumber = getLineNumber('import')

    // inject our import lines
    lines.splice(importLineNumber + 1, 0, newImportLines);

    // store the switch case line we want to inject
    const newSwitchCaseLines = `    case ${_.toUpper(_.snakeCase(duckName))}: return ${duckName}Reducer(state, action)`

    // determine the line we want to inject at
    const switchCaseLineNumber = getLineNumber('    case')

    // inject our switch case line
    lines.splice(switchCaseLineNumber + 1, 0, newSwitchCaseLines);

    const text = lines.join('\n');

    fs.writeFile(
      `${duckPath}/reducers.js`,
      text,
      (err) => {
        if (err) {
          console.log(err)
        }
      }
    )

    // TODO: update README
  }
}
