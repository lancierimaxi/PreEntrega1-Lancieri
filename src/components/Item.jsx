import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Image, Divider, ButtonGroup, Button } from '@chakra-ui/react'

const Item =({
  imagen,
  nombre,
  description,
  precio,
  stock
}) => {

    return(
      <>
      <Card maxW='sm'>
  <CardBody>
      <>
      {imagen}
      </>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{nombre}</Heading>
      <Text>
         {description} 
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       ${precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</>
    )
}
  

export default Item