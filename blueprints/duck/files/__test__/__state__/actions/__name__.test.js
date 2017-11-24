<%
  const actionName = pascalEntityName.substr(pascalEntityName.lastIndexOf('/') + 1)
%>
import { <%= actionName %> } from 'app/redux/state/<%= pascalEntityName.substr(0, pascalEntityName.lastIndexOf('/')) %>actions'
import { testState1 } from 'app/../../test/redux/state/testState'

describe('Redux Action: <%=pascalEntityName %>', () => {
  it('should ...', () => {
    const expectedAction = { type: SOME_ACTION }

    expect(<%= actionName %>()).toEqual(expectedAction)
  })
})
