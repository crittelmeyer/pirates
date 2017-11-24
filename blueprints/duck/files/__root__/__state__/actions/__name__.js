export const <%= snakeEntityName.toUpperCase().substr(snakeEntityName.lastIndexOf('/') + 1) %> = '<%= snakeEntityName.toUpperCase().substr(snakeEntityName.lastIndexOf('/') + 1) %>'

export function <%= pascalEntityName.substr(pascalEntityName.lastIndexOf('/') + 1) %>() {
  return { type: <%= snakeEntityName.toUpperCase().substr(snakeEntityName.lastIndexOf('/') + 1) %> }
}
