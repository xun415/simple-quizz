import Routes from "./routes";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

function App() {

  return (
      <BrowserRouter>
          <ChakraProvider>
              <Routes />
          </ChakraProvider>
      </BrowserRouter>
  )
}

export default App