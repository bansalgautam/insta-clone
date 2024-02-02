import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"gray.400"}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser name="sample" followers={1000} avatar="" />
      <SuggestedUser name="sample" followers={1000} avatar="" />
      <SuggestedUser name="sample" followers={1000} avatar="" />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        &copy; 2024 Built by Gautam
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
