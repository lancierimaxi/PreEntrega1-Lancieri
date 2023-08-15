import React from 'react'
import  {Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex className='nav'>
        <Box p="2" bg="linear-gradient(#f3ffff, #dedfdf);" color="black">
            <Link to={"/"}>
             <img className='srclogo' src="./img/Logo-removebg-preview.png" alt="Logo Fury" />
            </Link>
        </Box>
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Categories
                </MenuButton>
                <MenuList>
                    <MenuItem>
                    <Link to={`/category/${cat1}`}>
                    Category A
                    </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to={`/category/${cat2}`}>
                    Category B
                    </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to={`/category/${cat3}`}>
                    Category C
                    </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
        <Spacer/>
        <Box>
            <Link to={"/Cart"}> 
            <CartWidget/>
            </Link>
        </Box>
    </Flex>
  )
}

export default Navbar