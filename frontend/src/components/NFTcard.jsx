import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const NFTCard = ({name, description, imageUrl}) => {

  return (
    <Box
      w="375px" // Set width (adjust as needed)
      h="570px" // Set height (adjust as needed)
      bg="linear-gradient(to bottom left, #7266a8, #2f0e3a, #1a2a73)"
      color="white" // Text content color
      className="rounded-3xl"
    >
      <Box
        display="flex" // Set display to flex for responsive layout
        h="full" // Take full height of the main card
        flexDirection="column"
        className="ml-6"
      >
        <Box
          w="325px" // Set width
          h="285px" // Set height
          bg="transparent" // Transparent background (for shiny outline)
          className="rounded-xl" // Rounded corners
          boxShadow="inset 2px 2px 4px rgba(0, 0, 0, 0.5), inset -2px -2px 4px rgba(255, 255, 255, 0.3)" // Shiny outline
          marginTop={6} // Margin from top
          overflow="hidden" // Prevent the image from overflowing
        >
          <Image src={imageUrl} alt="NFT Image" objectFit="cover" w="full" h="full" />
        </Box>
        <Box
          display="flex" // Set display to flex for text layout
          flexDirection="column" // Align text elements vertically
          className="mt-4" // Margin top from the image
        >
          <Text
            // NFT name with large, bold font and a striking horizontal line
            fontSize="4xl"
            fontWeight="bold"
            lineHeight="initial"
            fontFamily='cursive'
          >
            {name}
          </Text>
          <Box
            bg="#7f33ff" // Gradient's darker purple shade
            h="2px" // Line height
            w="70%" // Line width
            mt="1" // Margin top from the name
            ml="-5" // Extend line slightly beyond name
            className="mb-4" // Margin bottom before description
          />
          <Text
            // NFT description with legible font size and line height
            fontSize="large"
            lineHeight="1.7" // Adjust as needed
            className="m-3"
            fontFamily='monospace'
          >
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default NFTCard;
