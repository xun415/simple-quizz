import {Heading, VStack, Text} from "@chakra-ui/react";
import QuizSettingForm from './QuizSettingForm.tsx'
import {QuizParam} from "@apis/quiz.ts";
import {useNavigate} from "react-router-dom";
import {useQuizSettingStore} from "../../stores/useQuizSettingStore.ts";

const IndexPage = () => {
    const navigate = useNavigate()
    const {setAmount, setDifficulty, amount, difficulty} = useQuizSettingStore()

    const onSubmit = ({amount, difficulty}: QuizParam) => {
        setAmount(amount)
        setDifficulty(difficulty)
        navigate('/quiz')
    }

    return (
        <VStack p={4}>
            <Heading as={'h1'}>Welcome to Simple Quiz</Heading>
            <Text>난이도, 문항 수를 선택하고 게임을 시작하세요!</Text>
            <QuizSettingForm initAmount={amount} initDifficulty={difficulty} onSubmit={onSubmit} />
        </VStack>
    )
}

export default IndexPage