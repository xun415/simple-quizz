import {QuizParam} from "@apis/quiz.ts";
import {Button, FormControl, FormLabel, Select, VStack} from "@chakra-ui/react";
import {DEFAULT_DIFFICULTY, DEFAULT_NUMBER_OF_QUIZ, QuizDifficulty} from "../../constant.ts";
import {useForm} from "react-hook-form";

type SettingFormValues = QuizParam

type Props = {
    onSubmit: (formData: SettingFormValues) => void
}

const QuizSettingForm = ({ onSubmit }: Props) => {
    const { handleSubmit, register } = useForm<SettingFormValues>({
        defaultValues: {
            difficulty: DEFAULT_DIFFICULTY,
            amount: DEFAULT_NUMBER_OF_QUIZ
        }
    })

    const onValid = ({amount, difficulty}: SettingFormValues) => {
        onSubmit({ amount, difficulty: difficulty === "전체"? undefined : difficulty })
    }

    return (
        <VStack w={'full'} as={'form'} onSubmit={handleSubmit(onValid)}>
            <FormControl>
                <FormLabel>퀴즈 난이도</FormLabel>
                <Select {...register('difficulty')}>
                    {
                        Object.entries(QuizDifficulty)
                            .map(([label, value]) => <option key={label} value={value}>{label}</option>)
                    }
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>퀴즈 갯수</FormLabel>
                <Select {...register('amount')}>
                    {
                        Array.from({ length: 10 })
                            .map((_, index) => <option key={index} value={index + 1}>{index + 1} 문제</option>)
                    }
                </Select>
            </FormControl>
            <Button type={'submit'} colorScheme={'blue'}>퀴즈 풀기</Button>
        </VStack>
    )
}

export default QuizSettingForm