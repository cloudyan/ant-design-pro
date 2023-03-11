import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const NoAccessPage: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you don't have access to this page."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoAccessPage;
