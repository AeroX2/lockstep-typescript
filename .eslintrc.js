module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': ["error", { allowExpressions: true }],
    }
}