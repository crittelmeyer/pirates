export function <%= pascalEntityName.substr(pascalEntityName.lastIndexOf('/') + 1) %>(rootState) {
  <%
    const stateSlices = selectorPath.replace('select', '').split('.');
    const lastSection = stateSlices[stateSlices.length - 1];
    const firstLetterLowerCase = lastSection.substr(0, 1).toLowerCase()
    stateSlices[stateSlices.length - 1] = firstLetterLowerCase + lastSection.substr(1)
  %>return rootState.<%= stateSlices.join('.') %>
}
