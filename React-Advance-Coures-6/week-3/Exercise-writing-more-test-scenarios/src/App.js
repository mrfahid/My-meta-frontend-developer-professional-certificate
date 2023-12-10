import "./App.css";
import FeedbackForm from "./FeedbackForm";
import { render, screen, fireEvent } from "@testing-library/react";

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

// Test scenarios
test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
  render(<App />);

  // Use queries to get the form elements
  const scoreInput = screen.getByLabelText(/score/i);
  const feedbackInput = screen.getByLabelText(/feedback/i);
  const submitButton = screen.getByText(/submit/i);

  // Set values for score and feedback
  fireEvent.change(scoreInput, { target: { value: "4" } });
  fireEvent.change(feedbackInput, { target: { value: "Good recipe!" } });

  // Click the submit button
  fireEvent.click(submitButton);

  // Assert that the form submitted
  expect(screen.getByText(/form submitted/i)).toBeInTheDocument();
});

test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
  render(<App />);

  // Use queries to get the form elements
  const scoreInput = screen.getByLabelText(/score/i);
  const submitButton = screen.getByText(/submit/i);

  // Set value for score
  fireEvent.change(scoreInput, { target: { value: "7" } });

  // Click the submit button
  fireEvent.click(submitButton);

  // Assert that the form submitted
  expect(screen.getByText(/form submitted/i)).toBeInTheDocument();
});

export default App;
