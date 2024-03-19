import React from "react";
import Register from "@/components/Register"; // Assuming Register is a component
import NFTcard from "@/components/NFTcard"; // Assuming NFTcard is a component
import { Box } from "@chakra-ui/react"; // Import Box for layout

const Home = () => {
  const imageUrl = "/axie-infinity.jpeg"; //
  const description = "Axie Infinity is a popular blockchain-based game where players can collect, breed, and battle digital creatures called Axies.";
  return (
    <main className="overflow-hidden flex">
      <Box display="flex" gap={24} className="place-items-center">
        <Box flex="0.45" p={4} marginLeft={130} className="h-[80%]">  {/* 60% width for Register */}
          <Register />
        </Box>
        <Box flex="0.55" p={4} marginLeft={40} >  {/* 40% width for NFTcard */}
          <NFTcard imageUrl={imageUrl} name={'Axie Infinity'} description={description}/>
        </Box>
      </Box>
    </main>
  );
};

export default Home;
