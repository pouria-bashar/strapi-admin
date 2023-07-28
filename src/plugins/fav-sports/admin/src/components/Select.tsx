import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Box, Stack, TextInput, SingleSelect, SingleSelectOption } from '@strapi/design-system';
const UrlImage = ({
  description,
  disabled,
  error,
  intlLabel,
  name,
  onChange,
  placeholder,
  required,
  value
}: any) => {
  const { formatMessage } = useIntl();
  const [sports, setSports] = useState([]);
  useEffect(() => {
    fetch('https://betr.com.au/api/v1/sports')
    .then((res) => res.json())
    .then((res: any) => {
      setSports(res.popularSports)
    })
  })
return (
    <Stack spacing={1}>
      <select 
        style={{ marginBottom: '20px'}}
        name={name} 
        onChange={(event: any) => {onChange({target: {name, value: event.target.value, type: 'string' }})}}
      >
        <option value="">--Please choose an option--</option>
        {sports.map((sport: any) => (
          <option value={sport.name} key={sport.id}>{sport.name}</option>
        ))}
    </select>
      <TextInput 
        disabled
        label="Selected Sport"
        name={'selected-sport'}
        value={value || ''}
      />
    </Stack>
  );
};
export default UrlImage;