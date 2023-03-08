import { copyFileSync, readFileSync, writeFileSync } from 'fs';

const files: [string, string, string, string][] = [
  [
    'node_modules/lodash/lodash.min.js',
    'src/lodash/lodash.min.js',
    'node_modules/lodash/package.json',
    'src/lodash/plugin.info',
  ],
  [
    'node_modules/jquery/dist/jquery.min.js',
    'src/jQuery/jquery.min.js',
    'node_modules/jquery/package.json',
    'src/jQuery/plugin.info',
  ],
  [
    'node_modules/axios/dist/axios.min.js',
    'src/axios/axios.min.js',
    'node_modules/axios/package.json',
    'src/axios/plugin.info',
  ],
];
files.forEach(([src, dest, packageJson, pluginInfo]) => {
  copyFileSync(src, dest);
  const { version } = JSON.parse(readFileSync(packageJson, 'utf-8'));
  if (version) {
    const pluginInfoData = JSON.parse(readFileSync(pluginInfo, 'utf-8'));
    pluginInfoData.version = version;
    writeFileSync(pluginInfo, JSON.stringify(pluginInfoData, undefined, 2));
  }
});
