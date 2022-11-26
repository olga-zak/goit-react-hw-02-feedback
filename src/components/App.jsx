import { Component } from 'react';
import { FeedbackButtons } from './FeedbackButtons/FeedbackButtons';
import { Section } from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <Section title="Please, leave feedback">
          <FeedbackButtons buttonsNames={this.state}></FeedbackButtons>
        </Section>
      </div>
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
