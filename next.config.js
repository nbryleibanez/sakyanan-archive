const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

module.exports = withNextra({
  experimental: {
    appDir: false,
  },
  // Other Next.js configurations go here
})
