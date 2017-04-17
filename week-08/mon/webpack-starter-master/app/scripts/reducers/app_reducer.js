export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      questions: [
        { question: "What is your name?" },
        { question: "What is your favorite animal?" },
        { question: "What is your favorite color?" },
        { question: "How tall are you?" },
        { question: "What is your bank account number?" }
      ]
    };
  }
  return state;
}
