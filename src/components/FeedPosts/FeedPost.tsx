import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

type Props = {
  img: string;
  username: string;
  avatar: string;
};

const FeedPost = ({ img, username, avatar }: Props) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={2} overflow={"hidden"}>
        <Image src={img} alt="User Profile Pic" borderRadius={4} />
      </Box>
      <PostFooter username={username} />
    </>
  );
};

export default FeedPost;
