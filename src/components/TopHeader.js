import React, { useState, useContext } from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';
import Search from './Search';

const TopHeader = () => {
  return (
    <>
      <Box bg="red.500">
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Box
            display={'flex'}
            alignItems="center"
            justifyContent={'center'}
            bg={'red.700'}
            w={'20%'}
            h={'50px'}
          >
            <Text align={'center'} fontSize="xl" color={'white'}>
              {' '}
              MOVIE APP
            </Text>
          </Box>
          <Box mr={'10rem'} w="300px">
            <Search />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default TopHeader;
