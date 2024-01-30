import {Outlet} from "react-router-dom";
import {Center, Container} from "@chakra-ui/react";

const Layout = () => {

    return (
        <Center h={'100dvh'} w={'100dvw'} bg={'#F3F4F6'}>
            <Container as={'main'} bg={'white'} w={'90%'} borderRadius={'md'} shadow={'md'} centerContent>
                <Outlet />
            </Container>
        </Center>
    )
}

export default Layout