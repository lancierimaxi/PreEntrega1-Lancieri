import React from 'react'
import  {Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <Flex className='nav'>
        <Box p="2" bg="linear-gradient(#f3ffff, #dedfdf);" color="black">
             <img className='srclogo' src="./img/Logo-removebg-preview.png" alt="Logo Fury" />
        </Box>
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categories
                </MenuButton>
                <MenuList>
                    <MenuItem>Category A</MenuItem>
                    <MenuItem>Category B</MenuItem>
                    <MenuItem>Category C</MenuItem>
                </MenuList>
            </Menu>
        </Box>
        <Spacer/>
        <Box>
            <CartWidget/>
        </Box>
    </Flex>
  )
}

export default Navbar