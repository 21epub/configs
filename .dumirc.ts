import { defineConfig } from 'dumi';

const name = 'configs';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name,
    socialLinks: {
      github: `https://github.com/21epub/${name}`,
    },
    logo: 'https://avatars.githubusercontent.com/u/5965951?s=200&v=4',
  },
  favicons: [`/${name}/epub360.ico`],
  base: `/${name}/`,
  publicPath: `/${name}/`,
});
