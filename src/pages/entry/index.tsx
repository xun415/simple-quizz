import {Heading, VStack, Text} from "@chakra-ui/react";
import QuizSettingForm from './QuizSettingForm.tsx'
import {QuizParam} from "@apis/quiz.ts";
const IndexPage = () => {
    const onSubmit = (formData: QuizParam) => {
        console.log(formData)
    }

    return (
        <VStack>
            <Heading as={'h1'}>Welcome to Quiz App</Heading>
            <Text>난이도, 문항 수를 선택하고 게임을 시작하세요!</Text>
            <QuizSettingForm onSubmit={onSubmit} />
        </VStack>
    )
}

export default IndexPage