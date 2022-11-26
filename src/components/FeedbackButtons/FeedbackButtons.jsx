export const FeedbackButtons = ({ buttonsNames, clickHandler }) => {
  return (
    <ul>
      {Object.keys(buttonsNames).map(name => {
        return (
          <li key={name}>
            <button type="button" onClick={clickHandler}>
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
