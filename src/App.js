import "./App.css";
import useLogic from "./useLogic";

export default function App() {
  const { inputRef, text, timeRemaining, textChange, wordCount, startGame } =
    useLogic();

  console.log(text);

  return (
    <div>
      <h1>How fast can you type ?</h1>
      <textarea ref={inputRef} onChange={textChange} value={text} />
      <h4>Time Remaining : {timeRemaining}</h4>
      <button onClick={startGame}>Start</button>
      <h1>Word Count : {wordCount()}</h1>
    </div>
  );
}
