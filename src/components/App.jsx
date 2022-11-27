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
    // this.setState(prevState => {
    //   return {
    //     [clickedButton]: (prevState[clickedButton] += 1),
    //   };
    // });
    //более лаконичная запись: неявный возврат; функция возвращает объект, если не поставть () после =>, то интерпретатор расценит {} как тело функции.
    //поэтому ставим () чтобы интерпретатор понял, что мы возвращаем некую сущность - {объект}
    this.setState(prevState => ({
      [clickedButton]: (prevState[clickedButton] += 1),
    }));
  };

  countTotalScore = () => {
    const arrToSum = Object.values(this.state);

    const sum = arrToSum.reduce((total, score) => {
      return score + total;
    }, 0);
    return sum;

    // arrToSum.reduce((total, score) => {
    //   return score + total;
    // }, 0);
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
            totalScore={this.countTotalScore()}
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
