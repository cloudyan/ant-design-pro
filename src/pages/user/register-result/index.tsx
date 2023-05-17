import classNames from 'classnames';
import { Button, Result, ConfigProvider } from 'antd';
import { Link } from '@umijs/max';
import React, { useContext } from 'react';
// import type { RouteChildrenProps } from 'react-router';
import designStyle from './style';

// TODO: Design Token
// import styles from './style.less';
const useStyle = designStyle('RegisterResult', (token: any) => {
  const { componentCls, antCls } = token;
  // 没有 iconCls
  const styleToken = {
    [componentCls]: {
      width: '800px',
      minHeight: '400px',
      margin: 'auto',
      padding: '80px',
      background: 'none',

      // 生效了，但没有where，优先级不高被下面的样式覆盖了
      // TODO: 怎么控制添加 where 呢？
      // :where(.css-dev-only-do-not-override-1vtf12y).ant-result .ant-result-icon>.anticon
      [`${antCls}icon`]: {
        fontSize: '64px',
      },
    },
    title: {
      marginTop: '32px',
      fontSize: '20px',
      lineHeight: '28px',
    },
    actions: {
      marginTop: '40px',
    },
  };
  console.log('styleToken', styleToken);
  return styleToken;
});
const styles = {
  registerResult: {
    width: '800px',
    minHeight: '400px',
    margin: 'auto',
    padding: '80px',
    background: 'none',
    // FIXED: 这种怎么使用 token, 需要使用 useStyle
    // :global {
    //   .anticon {
    //     font-size: 64px;
    //   }
    // }
    // https://github.com/ant-design/ant-design/wiki/CSS-in-JS-%E8%BF%81%E7%A7%BB%E6%8C%87%E5%8D%97
    // 可参考 Result 中 useStyle
    // '.anticon': {
    //   fontSize: '64px',
    // },
  },
  title: {
    marginTop: '32px',
    fontSize: '20px',
    lineHeight: '28px',
  },
  actions: {
    marginTop: '40px',
  },
  // TODO: 这种怎么使用 token
  // a + a { margin-left: 8px; }
};

const actions = (
  <div style={styles.actions}>
    <a href="">
      <Button size="large" type="primary">
        <span>查看邮箱</span>
      </Button>
    </a>
    <Link to="/" style={{ marginLeft: '8px' }}>
      <Button size="large">返回首页</Button>
    </Link>
  </div>
);

export type LocationState = Record<string, unknown>;

const RegisterResult: React.FC = (props) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const componentPrefixCls = getPrefixCls('register-result');
  const { wrapSSR, hashId } = useStyle(componentPrefixCls);

  const { location = {} } = props;
  const email = location.state
    ? (location.state as LocationState).account
    : 'AntDesign@example.com';
  return wrapSSR(
    <Result
      className={classNames(componentPrefixCls, hashId)}
      // style={styles.registerResult}
      status="success"
      title={
        <div style={styles.title}>
          <span>你的账户：{email} 注册成功</span>
        </div>
      }
      subTitle="激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。"
      extra={actions}
    />,
  );
};

export default RegisterResult;
