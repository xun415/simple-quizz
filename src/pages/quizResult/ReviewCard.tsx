import {VStack, Text} from "@chakra-ui/react";
import {COLOR} from "@assets/styles/vars.css.ts";
import {decodeHTMLEntities} from "@utils/string.ts";

type Props = {
    quizIdx: number
    question: string
    userAnswer: string
    correctAnswer: string
}
const ReviewCard = ({ quizIdx, question, userAnswer, correctAnswer}: Props) => {
    const isUserRight = userAnswer === correctAnswer
    return (
        <VStack w={'full'} p={2} spacing={2} bg={COLOR.GRAY} borderRadius={'md'} shadow={'md'}>
            <Text fontWeight={'bold'} color={isUserRight ? COLOR.GREEN : COLOR.RED}>문제 {quizIdx + 1}</Text>
            <Text>{decodeHTMLEntities(question)}</Text>
            <Text color={COLOR.GREEN}>Correct Answer: {decodeHTMLEntities(correctAnswer)}</Text>
            {!isUserRight? <Text color={COLOR.RED}>Your Answer: {decodeHTMLEntities(userAnswer)}</Text> : null}
        </VStack>
    )
}

export default ReviewCard