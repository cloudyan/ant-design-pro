import { history } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const ServerErrorPage: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, the server is reporting an error."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default ServerErrorPage;
