module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'prettier'
  ],
  plugins: ['eslint-plugin-prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error'],
    semi: [2, 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error'],
    'arrow-parens': ['error', 'always'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'vue/html-closing-bracket-newline': ['error'],
    'vue/html-closing-bracket-spacing': ['error'],
    'vue/html-indent': ['error'],
    'vue/html-quotes': ['error'],
    'vue/no-v-html': 'off'
  }
}
