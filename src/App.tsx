import { HStack, Image, Stack, Text } from '@chakra-ui/react'
import reactImg from './assets/react.svg'
import viteImg from './assets/vite.svg'

function App() {
  return (
    <Stack
      minHeight={`100vh`}
      width={`100vw`}
      backgroundColor={`red.400`}
      justifyContent={`center`}
      alignItems={`center`}
    >
      <HStack>
        <Image boxSize={`sm`} src={reactImg} alt={`React Image`} />
        <Image boxSize={`sm`} src={viteImg} alt={`Vite Image`} />
      </HStack>
      <Text fontSize={`2xl`}>Hello World</Text>
    </Stack>
  )
}

export default App
