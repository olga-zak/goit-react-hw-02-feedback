export const FeedbackData = ({
  good,
  neutral,
  bad,
  totalScore,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>
        <p>Good: {good} </p>
      </li>
      <li>
        <p>Neutral: {neutral} </p>
      </li>
      <li>
        <p>Bad: {bad} </p>
      </li>
      <li>
        <p>Total: {totalScore} </p>
      </li>
      <li>
        <p>Positive Feedback: {positivePercentage} % </p>
      </li>
    </ul>
  );
};
