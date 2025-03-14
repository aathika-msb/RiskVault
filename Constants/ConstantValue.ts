export interface TQuestions {
    id: number;
    question: string;
    options: TOptions[];
}
export interface TOptions {
    label: string;
    value: number;
}
export const questions = [
    {
        id: 1,
        question: "What is your primary goal for this bank account?",
        options: [
            {
                label: "Safety and stability",
                value: 1,
            },
            {
                label: "Moderate growth",
                value: 2,
            },
            {
                label: "High growth",
                value: 3,
            }
        ],
    },
    {
        id: 2,
        question: "How do you feel about investment risk?",
        options: [
            {
                label: "I don't want any risk",
                value: 1,
            },
            {
                label: "I can take minimal risk",
                value: 2,
            },
            {
                label: "I love risk",
                value: 3,
            }
        ],
    },
    {
        id: 3,
        question: "How would you react if your investment lost 10% in a month?",
        options: [
            {
                label: "I would sell everything to avoid further loss.",
                value: 1,
            },
            {
                label: "I would be very concerned but wait a bit before deciding.",
                value: 2,
            },
            {
                label: " I would hold my investment for the long term.",
                value: 3,
            },
            {
                label: " I would consider investing more if I believe in the strategy.",
                value: 4,
            },
            {
                label: "I would see it as an opportunity and invest aggressively.",
                value: 5,
            }
        ],
    },
    {
        id: 4,
        question: "How would you react if your investment lost 10% in a month?",
        options: [
            {
                label: "No experience",
                value: 1,
            },
            {
                label: "Minimal ",
                value: 2,
            },
            {
                label: "Moderate",
                value: 3,
            },
            {
                label: "High",
                value: 4,
            },
            {
                label: "Expert",
                value: 5,
            }

        ],
    },
    {
        id: 5,
        question: "How long do you plan to keep your money in this account?",
        options: [
            {
                label: "Less than 6 months",
                value: 1,
            },
            {
                label: "6 months to 1 year ",
                value: 2,
            },
            {
                label: "1 to 5 years",
                value: 3,
            },
            {
                label: "5 to 10 years",
                value: 4,
            },
            {
                label: "More than 10 years",
                value: 5,
            }
        ],
    },
];
