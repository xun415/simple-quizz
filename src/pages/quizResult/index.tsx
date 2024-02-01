import {Heading, VStack, Wrap, WrapItem, Text, Button} from "@chakra-ui/react";
import { Doughnut } from 'react-chartjs-2';
import {COLOR} from "@assets/styles/vars.css.ts";
import {useQuizGameStore} from "../../stores/useQuizGameStore.ts";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ReviewCard from "./ReviewCard.tsx";
import {formatSecondsToTime} from "@utils/time.ts";
import {useNavigate} from "react-router-dom";
import dayjs from "dayjs";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuizResultPage = () => {
    const navigate = useNavigate()
    const { quizRounds, gameStartAt, gameEndAt, reset } = useQuizGameStore()

    const [correctAnswerCnt, incorrectAnswerCnt] = quizRounds.reduce(
        ([correct, incorrect], round) => {
            if (round.userAnswer === round.correct_answer) {
                return [correct + 1, incorrect];
            } else {
                return [correct, incorrect + 1];
            }
        },
        [0, 0]
    );

    if (correctAnswerCnt === 0 && incorrectAnswerCnt === 0) {
        window.alert('게임 이력이 없습니다. 초기 페이지로 이동합니다.')
        navigate('/')
        reset()
    }

    const onClickRetry = () => {
        navigate('/')
        reset()
    }

    const formattedTime = formatSecondsToTime(dayjs(gameEndAt).diff(gameStartAt, 'seconds'))

    return (
        <VStack w={'full'} spacing={4} p={4} >
            <Heading as={'h2'}>Quiz Result</Heading>
            <Heading as={'h3'} fontSize={'x-large'}>Your Performance</Heading>
            <Wrap spacing={10} justify={'center'}>
                <WrapItem>
                    <VStack>
                        <Text fontSize={'xl'} fontWeight={'bold'}>소요 시간</Text>
                        <Text data-testid={'time-spent'}>{formattedTime}</Text>
                    </VStack>
                </WrapItem>
                <WrapItem>
                    <VStack>
                        <Text fontSize={'xl'} fontWeight={'bold'}>정답 개수</Text>
                        <Text data-testid={'correct-answer-cnt'}>{correctAnswerCnt} 개</Text>
                    </VStack>
                </WrapItem>
                <WrapItem>
                    <VStack>
                        <Text fontSize={'xl'} fontWeight={'bold'}>오답 개수</Text>
                        <Text data-testid={'incorrect-answer-cnt'}>{incorrectAnswerCnt} 개</Text>
                    </VStack>
                </WrapItem>
            </Wrap>

            <Doughnut data={{
                labels: ['정답', '오답'],
                datasets: [{
                    label: '정, 오답 비율 차트',
                    data: [correctAnswerCnt, incorrectAnswerCnt],
                    backgroundColor: [COLOR.GREEN, COLOR.RED]
                }]
            }} />

            <Button colorScheme={'blue'} onClick={onClickRetry}>다시 하기</Button>

            <Heading as={'h3'} fontSize={'x-large'}>오답 노트</Heading>
            <VStack spacing={4} justify={'center'} w={'full'}>
            {
                quizRounds
                    .map(({question, userAnswer, correct_answer }, index) =>
                        <ReviewCard key={index} quizIdx={index} question={question} userAnswer={userAnswer ?? ''} correctAnswer={correct_answer} />
                    )
            }
            </VStack>
        </VStack>
    )
}

export default QuizResultPage