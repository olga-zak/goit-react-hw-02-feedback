import { Component } from 'react';
import { FeedbackButtons } from './FeedbackButtons/FeedbackButtons';
import { Section } from './Section/Section';
import { FeedbackData } from './FeedbackData/FeedbackData';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedbackScore = event => {
    const clickedButton = event.target.textContent;
    // console.log(clickedButton);
    // console.log([clickedButton]);
    // this.setState(prevState => console.log(prevState));
    // document.activeElement.blur();
    this.setState(prevState => ({
      [clickedButton]: (prevState[clickedButton] += 1),
    }));
  };

  render() {
    return (
      <>
        <Section title="Please, leave feedback">
          <FeedbackButtons
            buttonsNames={this.state}
            clickHandler={this.addFeedbackScore}
          />
        </Section>
        <Section title="Statistics">
          <FeedbackData
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </Section>
      </>
    );
  }
}
export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
