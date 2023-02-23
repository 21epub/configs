import { defineConfig } from 'dumi';

const name = 'configs';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name,
    socialLinks: {
      github: `https://github.com/dxsixpc/${name}`,
    },
    logo: `/${name}/logo.png`,
  },
  base: `/${name}/`,
  publicPath: `/${name}/`,
});
