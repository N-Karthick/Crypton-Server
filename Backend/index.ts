import express, { Request, Response } from 'express';
import cors from 'cors'; 

const app = express();
const port = 3001;

app.use(cors());

interface Course {
    id: number;
    title: string;
    startDate: string;
    lessons: string;
    lessonCompleted: string;
    duration: string;
    color: string;
    backgroundColor: string;
}

const courses: Course[] = [
    {
        id: 1,
        title: "Basic Algorithm",
        startDate: "27 Jan,2023",
        lessons: "25 Lessons",
        lessonCompleted: "10/25 (48%)",
        duration: "14h 38m 56s",
        color: "#4343e7",
        backgroundColor: "#9cb4e9"
    },
    {
        id: 2,
        title: "Web Development",
        startDate: "23 Feb,2023",
        lessons: "45 Lessons",
        lessonCompleted: "40/45 (97%)",
        duration: "36h 30m 00s",
        color: "#f22727",
        backgroundColor: "#a9f4f2e8"
    },
    {
        id: 3,
        title: "Basic Data Science",
        startDate: "14 Jan,2023",
        lessons: "37 Lessons",
        lessonCompleted: "9/37 (40%)",
        duration: "36h 00m 00s",
        color: "#c41f2c",
        backgroundColor: "#fa9da2"
    },
    {
        id: 4,
        title: "UI/UX Design",
        startDate: "19 Feb,2023",
        lessons: "32 Lessons",
        lessonCompleted: "26/32 (84%)",
        duration: "16h 40m 50s",
        color: "#10a35d",
        backgroundColor: "#c0efcc"
    },
    {
        id: 5,
        title: "Project Management",
        startDate: "27 Jan,2023",
        lessons: "19 Lessons",
        lessonCompleted: "14/19 (89%)",
        duration: "13h 20m 00s",
        color: "#c6990b",
        backgroundColor: "#f8e7b2"
    }
];

app.get('/courses', (req: Request, res: Response) => {
    res.status(200).json({ message: "Data sent successfully", status: 200, data: courses });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
