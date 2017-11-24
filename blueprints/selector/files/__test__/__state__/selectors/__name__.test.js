<%
  const selectorName = pascalEntityName.substr(pascalEntityName.lastIndexOf('/') + 1)
%>
import { <%= selectorName %> } from 'app/redux/state/<%= pascalEntityName.substr(0, pascalEntityName.lastIndexOf('/')) %>selectors'
import { testState1 } from 'app/../../test/redux/state/testState'

describe('Redux Selector: <%= selectorName %>', () => {
  it('should create a selector that returns ...', () => {
    const expectedValue1 = { foo: 'bar' }

    expect(<%= selectorName %>(testState1)).toEqual(expectedValue1)
  })
})
