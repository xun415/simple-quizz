import Routes from "./routes";
import {HashRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

function App() {

  return (
      <HashRouter>
          <ChakraProvider>
              <Routes />
          </ChakraProvider>
      </HashRouter>
  )
}

export default App
