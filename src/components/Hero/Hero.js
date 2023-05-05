import "./Hero.css"
import { motion } from "framer-motion";
import { Flex, Box, Text } from "@chakra-ui/react";
import Jorgeimg2 from '../img/Jorgeimg2-removebg-preview.png'




function Hero() {

    return (
        <div className="Hero">
            <div>
            <h1 className="Encabezado1">INTRODUTION</h1>
            </div>
            <div>
            <h1 className="Encabezado2">Education</h1>
            </div>
            <div>
                <img className="img4" src={Jorgeimg2} />
            </div>
        {/* <Flex flexWrap="wrap" justifyContent="center">
        <Box width={["80"]} borderWidth="1px" 
        borderColor="gray.200" 
        borderRadius="15px 0 0 0" p={6} m={0} bg="white" display='flex'>
            <Text fontSize="xl" bg='blue' mb={4}>1</Text>
            <Text>Contenido de la tarjeta 1</Text>
        </Box>
        <Box width={["80"]} borderWidth="1px" 
        borderColor="gray.200" 
        borderRadius="0 15px 0 0" p={6} m={0} bg="white" display='flex'>
            <Text fontSize="xl" bg='blue' mb={4}>2</Text>
            <Text>Contenido de la tarjeta 2</Text>
        </Box>
        <Box width={["80"]} borderWidth="1px"
        borderColor="gray.200" 
        borderRadius="0 0 0 15px" p={6} m={0} bg="white" display='flex'>
            <Text fontSize="xl" bg='blue' mb={4}>3</Text>
            <Text>Contenido de la tarjeta 3</Text>
        </Box>
        <Box width={["80"]} borderWidth="1px" 
        borderColor="gray.200" 
        borderRadius="0 0 15px 0" p={6} m={0} bg="white" display='flex'>
            <Text fontSize="xl" bg='blue' mb={4}>4</Text>
            <Text>Contenido de la tarjeta 4</Text>
        </Box>
        </Flex> */}
        
        </div>
    );
}
export default Hero;



{/* <motion.h1 animate={{fontSise:50, color:"blue",x:250 }}></motion.h1> */}