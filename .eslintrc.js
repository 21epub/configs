// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: require.resolve('./eslint-config'),
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
