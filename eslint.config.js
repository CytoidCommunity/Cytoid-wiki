import antfu from '@antfu/eslint-config'

export default antfu({
  files: [
    '.vitepress/**/*',
    'docs/**/*',
  ],
  ignores: [
    '.vitepress/cache',
    '.vitepress/dist',
  ],
}, {
  rules: {
    'node/prefer-global/process': ['error', 'always'],
    'curly': ['error', 'all'],
    'no-undef': 'off',
  },
})
