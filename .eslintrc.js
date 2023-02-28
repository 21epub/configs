// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: require.resolve('./src/eslint-config'),
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
