import {Quiz} from "../../types.ts";
import {VStack, Text, Button} from "@chakra-ui/react";
import {shuffleArray} from "@utils/array.ts";
import {useEffect, useMemo, useState} from "react";
import {decodeHTMLEntities} from "@utils/string.ts";

type Props = {
    onSelectAnswer: (userAnswer: string) => void
    quiz: Quiz
}
const QuizQuestion = ({ quiz, onSelectAnswer }: Props) => {
    const {question, incorrect_answers, correct_answer} = quiz
    const [isSelected, setIsSelected] = useState(false)
    const [userAnswer, setUserAnswer] = useState('')

    const optionButtonValues = useMemo(() =>
        shuffleArray([...incorrect_answers, correct_answer]),
        [incorrect_answers,correct_answer])

    const getButtonColor = (optionValue: string) => {
        if (!isSelected) return undefined
        // value 가 유저 선택 값이고 정답일 경우
        if (optionValue === correct_answer) return 'green'
        // value 가 유저 선택 값이고, 오답일 경우
        if (optionValue === userAnswer && optionValue !== correct_answer) return 'red'
        return undefined
    }

    const onSelect = (value: string) => {
        if (isSelected) return;

        setIsSelected(true)
        setUserAnswer(value)
        onSelectAnswer(value)
    }

    useEffect(() => {
        setIsSelected(false)
        setUserAnswer('')
    }, [...incorrect_answers, correct_answer]);

    return (
        <VStack as={'section'} w={'full'}>
            <Text>{decodeHTMLEntities(question)}</Text>
            {
                optionButtonValues.map(value => (
                    <Button
                        key={value}
                        colorScheme={getButtonColor(value)}
                        onClick={() => onSelect(value)}
                        w={'full'}
                    >
                        {decodeHTMLEntities(value)}
                    </Button>
                ))
            }
        </VStack>
    )
}

export default QuizQuestion