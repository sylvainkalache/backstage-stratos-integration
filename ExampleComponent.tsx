import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  Header,
  Page,
  Content,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

export const ExampleComponent = () => (
  <Page themeId="tool">
      <Header title="Backstage + Stratos = ❤️" />
      <Content>
        <iframe
          src="http://127.0.0.1:8080/"
          width="100%"
          height="100%"
          style={{ border: 0 }}
        />
      </Content>
    </Page>
);
