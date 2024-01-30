import { useRoutes } from 'react-router-dom'
import IndexPage from '../pages'
import QuizResultPage from '../pages/QuizResult.tsx'
import QuizPage from '../pages/Quiz.tsx'
import Layout from "../components/layout";
import QuizReviewPage from "../pages/QuizReview.tsx";

const Routes = () => {
    return useRoutes([
        {
            element: <Layout />,
            children: [
                { path: '/', element: <IndexPage /> },
                { path: '/quiz', element: <QuizPage  />,
                },
                { path: '/quizResult', element: <QuizResultPage /> },
                { path: '/quizReview', element: <QuizReviewPage />  }
            ]
        }
    ])
}

export default Routes