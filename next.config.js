const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const withNextra = nextra({
  githubEditUrl: 'https://github.com/knull/docs/edit/main/content'
})

module.exports = withNextra()
