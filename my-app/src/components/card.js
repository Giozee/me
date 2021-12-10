import React from 'react';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
 import facebook from '../images/facebook.png';
 import linkedin from '../images/linkedin.png';
 import instagram from '../images/instagram.png';
  
  export default function Card() {
    return (
      <Center py={6}>
        <Box
          w={'334px'}
          h={'475px'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'334px'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://i.imgur.com/qO18vwj.png'
              }
              alt={'Author'}
              w={'152px'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Giorgio Ewah
              </Heading>
              <Text color={'gray.500'}>Frontend Developer</Text>
            </Stack>
    
            <div id='social' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Image
            h={'50px'}
            w={'50px'}
            mt={'27px'}
            mr={'18px'}
            ml={'18px'}
            src={facebook} alt="facebook"
            objectFit={'cover'}
          />
                      <Image
            h={'50px'}
            w={'50px'}
            mt={'27px'}
            mr={'18px'}
            ml={'18px'}
            src={linkedin} alt="linkedin"
            objectFit={'cover'}
          />
                      <Image
            h={'50px'}
            w={'50px'}
            mt={'27px'}
            mr={'18px'}
            ml={'18px'}
            src={instagram} alt="instagram"
            objectFit={'cover'}
          />
            </div>
            

            

          </Box>
        </Box>
      </Center>
    );
  }