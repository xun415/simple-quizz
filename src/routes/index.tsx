import { useRoutes } from 'react-router-dom'
import IndexPage from '../pages/entry'
import Layout from "../components/layout";
import QuizPage from "../pages/quiz";
import QuizResultPage from "../pages/quizResult";

const Routes = () => {
    return useRoutes([
        {
            element: <Layout />,
            children: [
                { path: '/', element: <IndexPage /> },
                { path: '/quiz', element: <QuizPage  />,
                },
                { path: '/quizResult', element: <QuizResultPage /> }
            ]
        }
    ])
}

export default Routes