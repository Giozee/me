import React from "react";
import {
  ChakraProvider,
  Stack,
  Avatar,
  AvatarBadge,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Grid,
  Switch,
  InputGroup,
  InputRightElement,
  Icon,
  Flex,
  Box,
  Heading,
  Tag,
  Text
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const App = () => (
  <ChakraProvider resetCSS>
  
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      justifyContent="center"
      textAlign="center"
      mt={3}
      color="whiteAlpha.500"
      mb={3}
      borderRadius="lg"
      border="1px"
      ml={6}
      mr={6}
      p={0}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="stretch"
        backgroundColor="blackAlpha.200"
        borderRadius="lg"
        boxShadow="lg"
      >
        <Box display="block" m={6}>
          <Avatar
            size="2xl"
            display="grid"
            name="Giorgio Ewah"
            src="https://i.imgur.com/qO18vwj.png"
          />
          <Tag
            size="sm"
            variant="solid"
            colorScheme="facebook"
            rounded="lg"
            textAlign="center"
            fontSize="xl"
            pb={1}
            pl={3}
            pr={3}
            mt={3}
            display="grid"
          >
            Giorgio Ewah
            
          </Tag>
          
        </Box>
      </Box>
      
    </Flex>
    <Grid
      p={1}
      gap={6}
      templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
      ml={6}
      mr={6}
      borderRadius="lg"
    >
      <Stack>
        <Box
          backgroundColor="blackAlpha.200"
          boxShadow="lg"
          borderRadius="lg"
          pl={3}
          pr={3}
          pt={6}
          pb={6}
          border="0px"
          m={3}
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
            pb={2}
          >
            <Heading
              size="md"
              as="h2"
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily="heading"
            >
              About
            </Heading>
          </Flex>
          <Stack ml={4} spacing={2} mt={4} mr={4}>
            <Stack
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Tag colorScheme="facebook" size="md">
                FrontEnd Developer
              </Tag>
              <Text>Text value</Text>
              <Text>Text value</Text>
            </Stack>
            <Stack spacing={2} alignItems="flex-start">
              <Tag colorScheme="facebook" size="md">
                Tag name
              </Tag>
              <Text>Text value</Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Box>
        <Box
          backgroundColor="blackAlpha.200"
          borderRadius="lg"
          boxShadow="lg"
          pl={3}
          pr={3}
          pt={6}
          pb={6}
          m={3}
        >
          <Flex
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Heading
              size="md"
              as="h2"
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily="heading"
            >
              Things that i know
            </Heading>
          </Flex>
          <Stack spacing={4} ml={4} mt={4}>
            <Stack spacing={2} alignItems="flex-start">
              <Tag colorScheme="facebook" size="md" variant="subtle">
                Tag name
              </Tag>
              <Text>Text value</Text>
            </Stack>
            <Stack spacing={2} alignItems="flex-start">
              <Tag size="md" variant="subtle">
                Tag name
              </Tag>
              <Text>Text value</Text>
            </Stack>
            <Stack spacing={2} alignItems="flex-start">
              <Tag size="md" variant="subtle" colorScheme="gray">
                Tag name
              </Tag>
              <Text>Text value</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box>
        <Box
          backgroundColor="blackAlpha.200"
          borderRadius="lg"
          boxShadow="lg"
          pl={3}
          pr={3}
          pt={6}
          pb={6}
          m={3}
        >
          <Flex
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            mb={2}
            pl={4}
          >
            <Heading
              size="md"
              as="h2"
              lineHeight="shorter"
              fontWeight="bold"
              fontFamily="heading"
            >
            
              My favourite Quotes:
            </Heading>
            <div id="quotes"/>

            
          </Flex>
          <Stack spacing={5} pl={4} pt={4}>
            <Stack spacing={2} alignItems="flex-start">
            
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Grid>
  </ChakraProvider>
);

export default App;
