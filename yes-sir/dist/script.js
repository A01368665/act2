const { useState } = React;
const Voted = ({ anecdotes, voted, votes }) => {
  if (votes != Array(anecdotes.length).fill(0)) {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Anecdote with most votes"), /*#__PURE__*/
      React.createElement("p", null, anecdotes[voted[1]])));


  }

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Anecdote with most votes"), /*#__PURE__*/
    React.createElement("p", null, "Vote for your favorite anecdote to find it here!")));


};
const App = () => {
  const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'];



  const [selected, setSelected] = useState(0);
  const [mostVoted, SetMostVoted] = useState([0, 0]);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));


  const randomQuote = () => {
    let a = Math.floor(Math.random() * anecdotes.length);
    setSelected(a);

  };

  const vote = () => {

    const voting = () => {
      const copia = [...votes];
      copia[selected] += 1;
      if (copia[selected] > mostVoted[0]) {
        SetMostVoted([copia[selected], selected]);
      }
      setVotes(copia);
    };
    return voting;
  };

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "anecdote" }, /*#__PURE__*/
    React.createElement("h2", null, "Anecdote of the day"),
    anecdotes[selected]), /*#__PURE__*/


    React.createElement("p", null, "has ", votes[selected], " votes."), /*#__PURE__*/
    React.createElement("button", { onClick: randomQuote }, "next anecdote"), /*#__PURE__*/


    React.createElement("button", { onClick: vote(selected) }, "vote "), /*#__PURE__*/
    React.createElement(Voted, { anecdotes: anecdotes, voted: mostVoted, votes: votes })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));