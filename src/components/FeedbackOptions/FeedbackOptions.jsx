import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
