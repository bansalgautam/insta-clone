import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  name: string;
  followers: number;
  avatar: string;
};

const SuggestedUser = ({ name, followers, avatar }: Props) => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} fontWeight={"gray.500"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
