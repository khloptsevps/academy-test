import React from 'react';
import { FC } from 'react';

import { Box } from '@ui/layout';
import { Column } from '@ui/layout';
import { Layout } from '@ui/layout';
import { Text } from '@ui/text';

import { GhostButton } from '@ui/button';

import { useRandomColor } from './hooks';
import { body } from './helpers';
import { getRandomizedColorMessage } from './helpers';
import { checkResult } from './helpers';

const StateAction: FC = () => {
  const node = useRandomColor();
  const handleClick = (_event: React.SyntheticEvent) => {
    // Тут ничего трогать не нужно
    checkResult(body(window));
  };

  return (
    <Box width="100%" height="100%" justifyContent="center">
      <Column justifyContent="center">
        <Layout>
          <Text fontWeight="medium" fontSize="big" ref={node}>
            {getRandomizedColorMessage<string>('I have randomized color')}
          </Text>
        </Layout>
        <Layout flexBasis={16} />
        <Layout>
          <Box>
            <GhostButton
              onClick={handleClick}
              style={{ border: '1px solid black' }}
            >
              <Text fontWeight="medium" fontSize="big">
                Click me
              </Text>
            </GhostButton>
          </Box>
        </Layout>
      </Column>
    </Box>
  );
};

export { StateAction };
