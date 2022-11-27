export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {Object.keys(options).map(name => {
        return (
          <li key={name}>
            <button type="button" onClick={onLeaveFeedback}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
