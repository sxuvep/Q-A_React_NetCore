export interface QuestionData {
  questionId: number;
  title: string;
  content: string;
  userName: string;
  created: Date;
  answers: AnswerData[];
}

export interface AnswerData {
  answerId: number;
  content: string;
  userName: string;
  created: Date;
}

export const questions: QuestionData[] = [
  {
    questionId: 1,
    title: 'Why should I learn TypeScript?',
    content:
      'Typesript seems to be getting popular so i wondered whether it is worth my time learning it? What benefits does it give over Javascript?',
    userName: 'Bob',
    created: new Date(),
    answers: [
      {
        answerId: 1,
        content: 'To catch problems earlier speeding up your developments',
        userName: 'Jane',
        created: new Date(),
      },
      {
        answerId: 2,
        content: 'So, that you can use the Javascript features of tomorrow',
        userName: 'Fred',
        created: new Date(),
      },
    ],
  },
  {
    questionId: 2,
    title: 'Which state management tool should i use?',
    content:
      'There seem to be a fair few state management tools around for React - React, Unstated,...which one should i use?',
    userName: 'Bob',
    created: new Date(),
    answers: [],
  },
];

export const getUnanswered = () => {
  return questions.filter((question) => question.answers.length === 0);
};
