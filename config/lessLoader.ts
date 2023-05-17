import { theme } from 'antd';

const { defaultAlgorithm, defaultSeed } = theme;
defaultSeed.colorPrimary = 'red'; // 这里修改自定义静态css变量
const mapToken = defaultAlgorithm(defaultSeed);

// 适配 less
export default {
  // 配置这个属性需要安装 less-loader 插件
  // pnpm i less less-loader -D
  lessLoader: {
    modifyVars: mapToken,
  },
};
