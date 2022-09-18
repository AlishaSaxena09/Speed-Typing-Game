import { useEffect, useRef, useState } from "react";

export default function useLogic() {
  const STARTING_TIME = 30;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isTimerRunning) return;

    const time = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setIsTimerRunning(false);
          clearInterval(time);
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [isTimerRunning]);

  function textChange(e) {
    if (timeRemaining <= 0) return;

    setText(e.target.value);
  }

  function wordCount() {
    return text.split(" ").filter((word) => !!word).length;
  }

  const startGame = () => {
    setText("");
    setTimeRemaining(STARTING_TIME);
    setIsTimerRunning(true);
    inputRef.current.focus();
  };

  return {
    inputRef,
    text,
    timeRemaining,
    isTimerRunning,
    textChange,
    wordCount,
    startGame,
  };
}
