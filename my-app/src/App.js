import React from 'react'
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
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

const App = () => (
  <ChakraProvider resetCSS>
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      mt={3}
      color="#000000"
      mb={3}
      pt={10}
      pb={10}
    >
      <Avatar size="2xl" />
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
      >
        Giorgio Ewah
      </Tag>
    </Flex>
    <Grid p={10} gap={6} templateColumns="repeat(auto-fit, minmax(350px, 1fr))">
      <Stack>
        <Box
          backgroundColor="white"
          boxShadow="sm"
          borderRadius="lg"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
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
              Bla
            </Heading>
          </Flex>
          <Stack ml={4} spacing={2} mt={4} mr={4}>
            <Stack
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Tag colorScheme="facebook" size="md">
                Tag name
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
          backgroundColor="white"
          borderRadius="lg"
          boxShadow="sm"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
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
              Bla
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
          backgroundColor="white"
          borderRadius="lg"
          boxShadow="sm"
          pl={3}
          pr={3}
          pt={5}
          pb={5}
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
              y mas
            </Heading>
          </Flex>
          <Stack spacing={5} pl={4} pt={4}>
            <Stack spacing={2} alignItems="flex-start">
              <Tag
                size="md"
                variant="solid"
                colorScheme="facebook"
                rounded="md"
              >
                uno
              </Tag>
              <Text color="gray.600">Text value</Text>
            </Stack>
            <Stack alignItems="flex-start">
              <Tag
                size="md"
                variant="solid"
                colorScheme="facebook"
                rounded="md"
              >
                due
              </Tag>
              <Text color="gray.600">Text value</Text>
            </Stack>
            <Stack spacing={4} alignItems="flex-start">
              <Tag size="md" variant="solid" colorScheme="facebook">
                tre
              </Tag>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Grid>
  </ChakraProvider>
)

export default App
