import {QuizResponse} from "../../apis/quiz.ts";

export const DEFAULT_QUIZ_MOCK_DATA: QuizResponse["results"] = [
    {
        "type":"multiple",
        "difficulty":"easy",
        "category":"Entertainment: Video Games",
        "question":"Who is the protagonist in the game &quot;The Walking Dead: Season One&quot;?",
        "correct_answer":"Lee Everett",
        "incorrect_answers":[
            "Clementine",
            "Kenny",
            "Rick Grimes"
        ]
    },
    {
        "type":"multiple",
        "difficulty":"medium",
        "category":"Entertainment: Music",
        "question":"Who is the founder and leader of industrial rock band, &#039;Nine Inch Nails&#039;?",
        "correct_answer":"Trent Reznor",
        "incorrect_answers":[
            "Marilyn Manson",
            "Robin Finck",
            "Josh Homme"
        ]
    },
    {
        "type":"multiple",
        "difficulty":"medium",
        "category":"Science &amp; Nature",
        "question":"Which of the following men does not have a chemical element named after him?",
        "correct_answer":"Sir Isaac Newton",
        "incorrect_answers":[
            "Albert Einstein",
            "Niels Bohr",
            "Enrico Fermi"
        ]
    },
    {
        "type":"multiple",
        "difficulty":"hard",
        "category":"Entertainment: Cartoon &amp; Animations",
        "question":"What was the name of Jonny&#039;s pet dog in The Adventures of Jonny Quest?",
        "correct_answer":"Bandit",
        "incorrect_answers":[
            "Lucky",
            "Rocky",
            "Max"
        ]
    },
    {
        "type":"multiple",
        "difficulty":"medium",
        "category":"Entertainment: Video Games",
        "question":"The cake depicted in Valve&#039;s &quot;Portal&quot; franchise most closely resembles which real-world type of cake?",
        "correct_answer":"Black Forest",
        "incorrect_answers":[
            "Devil&#039;s Food",
            "Molten Chocolate",
            "German Chocolate"
        ]
    },
    {
        "type":"multiple",
        "difficulty":"medium",
        "category":"General Knowledge",
        "question":"Linus Pauling, one of the only winners of multiple Nobel Prizes, earned his Nobel Prizes in Chemistry and what?",
        "correct_answer":"Peace",
        "incorrect_answers":[
            "Physics",
            "Economics",
            "Physiology/Medicine"
        ]
    },
    {
        "type":"multiple",
        "difficulty":"medium",
        "category":"Geography",
        "question":"How many rivers are in Saudi Arabia?",
        "correct_answer":"0",
        "incorrect_answers":[
            "1",
            "2",
            "3"
        ]
    },
    {
        "type":"multiple",
        "difficulty":"medium",
        "category":"Entertainment: Japanese Anime &amp; Manga",
        "question":"In the 2011 TV anime series, &quot;THE iDOLM@STER&quot;, what was the name of Iori&#039;s stuffed toy bunny?",
        "correct_answer":"Charles",
        "incorrect_answers":[
            "Bubsy",
            "Kero",
            "Usagi"
        ]
    },
    {
        "type":"multiple",
        "difficulty":"medium",
        "category":"Vehicles",
        "question":"Which one is NOT the function of engine oil in car engines?",
        "correct_answer":"Combustion",
        "incorrect_answers":[
            "Lubrication",
            "Cooling",
            "Reduce corrosion"
        ]
    },
    {
        "type":"multiple",
        "difficulty":"medium",
        "category":"Entertainment: Film",
        "question":"What is the name of the villian in the 2015 Russian-American Sci-Fi Movie &quot;Hardcore Henry&quot;?",
        "correct_answer":"Akan",
        "incorrect_answers":[
            "Estelle",
            "Jimmy",
            "Henry"
        ]
    }
]