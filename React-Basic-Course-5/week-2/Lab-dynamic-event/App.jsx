const App = () => {
  const clickHandler = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(`You clicked ${randomNumber}`);
    const userNumber = Number(prompt("Enter your number between 1 to 3"));
    if (userNumber === randomNumber) {
      alert("Congratulation! You guessed the correct number");
    } else {
      alert(
        "Sorry, you did not guess correctly. Please try again",
        +randomNumber
      );
    }
  };
  return (
    <>
      <h1>Task: Add a button and handle Click event</h1>
      <button onClick={clickHandler}>Gusse The Number between 1 to 3</button>
    </>
  );
};

export default App;
