import React from 'react';

import {
  Flex,
  Divider,
  Text,
  Stack,
  Radio,
  RadioGroup,
  Button,
} from '@chakra-ui/react';

import { useContext } from 'react';
import MovieContext from '../MovieContext';

const Sidebar = () => {
  const {
    fetchPopular,
    fetchTopRated,
    fetchUpcoming,
    getFavourites,
    radioValue,
    setRadioValue,
  } = useContext(MovieContext);

  return (
    <Flex minH={'100vh'} minW="20%" bg="gray.900" flexDir={'column'}>
      <Flex flexDir="column" w="100%" as="nav" pl={25} mt={'25px'}>
        <Button
          bg={'gray.900'}
          title="Popular Movies"
          onClick={() => fetchPopular()}
          borderRadius="none"
          py={'2rem'}
          _hover={{
            bg: 'gray.700',
          }}
          _focus={{
            bg: 'gray.700',
          }}
        >
          <Text
            fontSize={{
              base: '10px',
              md: '15px',
              lg: '20px',
            }}
            textAlign={'left'}
            w="100%"
            color={'white'}
          >
            {radioValue === 'tr-TR' ? `Popüler Filmler` : `Popular Films`}
          </Text>
        </Button>

        <Button
          bg={'gray.900'}
          title="Top Rated Movies"
          onClick={() => fetchTopRated()}
          borderRadius="none"
          py={'2rem'}
          _hover={{
            bg: 'gray.700',
          }}
          _focus={{
            bg: 'gray.700',
          }}
        >
          <Text
            fontSize={{
              base: '10px',
              md: '15px',
              lg: '20px',
            }}
            textAlign={'left'}
            w="100%"
            color={'white'}
          >
            {radioValue === 'tr-TR' ? `En Çok Oy Alan` : `Top Rated Movies`}{' '}
          </Text>{' '}
        </Button>

        <Button
          bg={'gray.900'}
          title="Upcoming Movies"
          onClick={() => fetchUpcoming()}
          borderRadius="none"
          py={'2rem'}
          _hover={{
            bg: 'gray.700',
          }}
          _focus={{
            bg: 'gray.700',
          }}
        >
          <Text
            fontSize={{
              base: '10px',
              md: '15px',
              lg: '20px',
            }}
            textAlign={'left'}
            w="100%"
            color={'white'}
          >
            {radioValue === 'tr-TR' ? `Vizyona Girecekler` : `Upcoming Movie`}{' '}
          </Text>
        </Button>
      </Flex>
      <Divider
        borderWidth={'2px'}
        mt={'10px'}
        width="auto"
        borderColor={'white'}
      />
      <Flex mt={10}>
        <RadioGroup
          onChange={setRadioValue}
          value={radioValue}
          w="100%"
          pl={25}
        >
          <Stack>
            <Radio value="tr-TR">
              <Text fontSize={'sm'} color={'white'}>
                Turkish
              </Text>
            </Radio>
            <Radio value="en-EN">
              <Text fontSize={'sm'} color={'white'}>
                English
              </Text>
            </Radio>
          </Stack>{' '}
        </RadioGroup>
      </Flex>
      <Divider
        borderWidth={'2px'}
        mt={'30px'}
        width="auto"
        borderColor={'white'}
      />
      <Flex flexDir="column" w="100%" as="nav" pl={25} mt={'25px'}>
        <Button
          bg={'gray.900'}
          title="Get Favourites"
          onClick={() => getFavourites()}
          borderRadius="none"
          py={'2rem'}
          _hover={{
            bg: 'gray.700',
          }}
          _focus={{
            bg: 'gray.700',
          }}
        >
          <Text
            fontSize={{
              base: '10px',
              md: '15px',
              lg: '20px',
            }}
            textAlign={'left'}
            w="100%"
            color={'white'}
          >
            {radioValue === 'tr-TR' ? `Favori Filmler` : `Favourite Movies`}{' '}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
