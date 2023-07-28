import React, { useState } from 'react';
import { Button, ContentLayout, TextInput, Typography, Main } from '@strapi/design-system';
import { Plus } from '@strapi/icons';

const HomePage = () => {
  const [dataSource, setDataSource] = useState('');
  return (
    <Main tabIndex={-1}>
      <ContentLayout>
        <Typography fontWeight="bold" textColor="neutral800" as="h1" id="add-locale-title">
          Hello
        </Typography>
        <TextInput
          style={{ margin: '20px 0' }}
          name="displayName"
          label="Data Source"
          value={dataSource}
          onChange={(e: any) => setDataSource(e.target.value)}
        />
        <Button variant="primary" startIcon={<Plus />}>
          Submit
        </Button>
      </ContentLayout>
    </Main>
  );
};

export default HomePage;
