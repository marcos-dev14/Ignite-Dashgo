import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Marcos Paulo</Text>
        <Text color="gray.300" fontSize="small">
          mprogramador.10@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Marcos Paulo"
        src="https://github.com/marcos-dev14.png"
      />
    </Flex>
  );
}
