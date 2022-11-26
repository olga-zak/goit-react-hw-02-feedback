export const FeedbackButtons = ({ buttonsNames }) => {
  return (
    <ul>
      {Object.keys(buttonsNames).map(name => {
        return (
          <li key={name}>
            <button>{name}</button>
          </li>
        );
      })}
    </ul>
  );
};
