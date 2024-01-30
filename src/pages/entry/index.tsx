import {Heading, VStack, Text} from "@chakra-ui/react";
import QuizSettingForm from './QuizSettingForm.tsx'
import {QuizParam} from "@apis/quiz.ts";
import {useNavigate} from "react-router-dom";
const IndexPage = () => {
    const navigate = useNavigate()

    const onSubmit = (formData: QuizParam) => {
        console.log(formData)
        navigate('/quiz')
    }

    return (
        <VStack p={4}>
            <Heading as={'h1'}>Welcome to Quiz App</Heading>
            <Text>난이도, 문항 수를 선택하고 게임을 시작하세요!</Text>
            <QuizSettingForm onSubmit={onSubmit} />
        </VStack>
    )
}

export default IndexPage