import { Button, Container, InputGroup, InputRightElement, Textarea } from "@chakra-ui/react"

function App() {

  return (
    <Container display='flex' maxWidth='container.sm' height='100vh' bg='gray.700' p="20px" flexDirection='column' justifyContent='flex-end'>
      <InputGroup size='md'>
        {/* <Input pr='4.5rem' type='text' placeholder='Enter password'/> */}
        <Textarea placeholder='Here is a sample placeholder' rows={1} pr='4.5rem' resize='none' color='whiteAlpha.900' />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm'>Send</Button>
        </InputRightElement>
      </InputGroup>
    </Container>
  )
}

export default App
