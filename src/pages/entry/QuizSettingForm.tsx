import {QuizParam} from "@apis/quiz.ts";

type Props = {
    onSubmit: (formData: QuizParam) => void
}
const QuizSettingForm = ({ onSubmit }: Props) => {
    console.log(onSubmit)
    return (
        <div></div>
    )
}

export default QuizSettingForm