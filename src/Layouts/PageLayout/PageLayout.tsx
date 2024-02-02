import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <Flex>
      {/* Sidebar on the left */}

      <Box w={{ base: "70px", md: "240px" }}>
        <Sidebar />
      </Box>

      {/* Content on the right */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default PageLayout;
