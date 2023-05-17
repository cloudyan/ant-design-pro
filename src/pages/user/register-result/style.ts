import type { GenerateStyle, ProAliasToken } from '@ant-design/pro-provider';
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';

interface StyleToken extends ProAliasToken {
  antCls: string;
  iconCls: string;
  componentCls: string;
}

const genStyle: GenerateStyle<StyleToken> = (token: any, callback: any) => {
  // const { componentCls, antCls, iconCls } = token;

  // prefixCls,     // 调用 useStyle 时传入的 prefixCls
  // componentCls,  // .${prefixCls}
  // iconCls,       // .anticon
  // antCls,        // .ant

  // callback 示例
  // const callback = (token) => {
  //   const { componentCls, antCls, iconCls } = token;
  //   return {
  //     [componentCls]: {
  //       maxWidth: '100%',
  //       '&-item': {
  //         '&&-show-label': {
  //           [`${token.antCls}-form-item-label`]: {
  //             display: 'inline-block',
  //           },
  //         },
  //       },
  //       [`${componentCls}-title`]: {
  //         color: token.colorText,
  //         ':hover': {
  //           color: token.colorPrimaryHover,
  //         },
  //       },

  //     },
  //   }
  // }

  return callback && callback(token);
};

export default function designStyle(ComponentName: string, callback = () => {}) {
  return function useStyle(prefixCls?: string) {
    return useAntdStyle(ComponentName, (token: any) => {
      const styleToken: StyleToken = {
        ...token,
        componentCls: `.${prefixCls}`,
      };
      return [genStyle(styleToken, callback)];
    });
  };
}
