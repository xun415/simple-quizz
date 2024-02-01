import QuizQuestion from "./QuizQuestion.tsx";
import {Heading, VStack, Text, Button, Spinner} from "@chakra-ui/react";
import {useQuizGameStore} from "../../stores/useQuizGameStore.ts";
import {useEffect, useState} from "react";
import {getQuiz} from "@apis/quiz.ts";
import {useQuizSettingStore} from "../../stores/useQuizSettingStore.ts";
import {useNavigate} from "react-router-dom";

const QuizPage = () => {
    const navigate = useNavigate()
    const [isLoadingQuiz, setIsLoadingQuiz] = useState(true)
    const {initQuizRounds, quizRounds, setUserAnswer, endGame} = useQuizGameStore()
    const {amount: quizRoundAmount, difficulty} = useQuizSettingStore()
    const [isCurrentRoundFinished, setIsCurrentRoundFinished ] = useState(false)
    const [currentRoundIndex, setCurrentRoundIndex] = useState(0)

    const onSelectAnswer = (userAnswer: string) => {
        setUserAnswer(userAnswer, currentRoundIndex)
        setIsCurrentRoundFinished(true)
    }

    const onClickNext = () => {
        setIsCurrentRoundFinished(false)
        if (currentRoundIndex < quizRoundAmount - 1) {
            setCurrentRoundIndex(prev => prev + 1)
            return;
        }
        endGame()
        navigate('/quizResult')
    }

    useEffect(() => {
        getQuiz({ amount: quizRoundAmount, difficulty })
            .then(result => {
                initQuizRounds(result.data.results)
                setIsLoadingQuiz(false)
            })
            .catch(() => {
                window.alert('api 에러가 발생했습니다. 잠시 후 다시 시도해주세요.')
            })

    }, []);

    return (
        <VStack w={'full'} spacing={4} p={4}>
            <Heading as={'h2'}>Simple Quiz</Heading>
            <Text>다음 질문에 답해주세요.</Text>
            {
                isLoadingQuiz ?
                    <Spinner thickness='8px' color='blue.500'  title={'퀴즈 불러오기...'} w={20} h={20} />
                    :
                    <VStack spacing={2} w={'full'}>
                        <Text fontSize={'xl'}>Question {currentRoundIndex + 1}</Text>
                        {quizRounds[currentRoundIndex] &&
                            <QuizQuestion quiz={quizRounds[currentRoundIndex]} onSelectAnswer={onSelectAnswer} />
                        }
                    </VStack>
            }
            <Button colorScheme={'blue'} isDisabled={!isCurrentRoundFinished} onClick={onClickNext}>다음 문항</Button>
        </VStack>
    )
}

export default QuizPage