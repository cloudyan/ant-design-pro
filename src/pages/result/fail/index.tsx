import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { GridContent } from '@ant-design/pro-components';
import { Button, Card, Result, theme } from 'antd';
import { Fragment } from 'react';
// import styles from './index.less';

const Content = () => {
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <Fragment>
      <div
        style={{
          marginBottom: '16px',
          color: token.colorPrimaryText,
          fontWeight: 500,
          fontSize: '16px',
        }}
      >
        <span>您提交的内容有如下错误：</span>
      </div>
      <div style={{ marginBottom: 16 }}>
        <CloseCircleOutlined style={{ marginRight: 8, color: token.colorHighlight }} />
        <span>您的账户已被冻结</span>
        <a style={{ marginLeft: 16 }}>
          <span>立即解冻</span>
          <RightOutlined />
        </a>
      </div>
      <div>
        <CloseCircleOutlined style={{ marginRight: 8, color: token.colorHighlight }} />
        <span>您的账户还不具备申请资格</span>
        <a style={{ marginLeft: 16 }}>
          <span>立即升级</span>
          <RightOutlined />
        </a>
      </div>
    </Fragment>
  );
};

export default () => (
  <GridContent>
    <Card bordered={false}>
      <Result
        status="error"
        title="提交失败"
        subTitle="请核对并修改以下信息后，再重新提交。"
        extra={
          <Button type="primary">
            <span>返回修改</span>
          </Button>
        }
        style={{ marginTop: 48, marginBottom: 16 }}
      >
        <Content />
      </Result>
    </Card>
  </GridContent>
);
