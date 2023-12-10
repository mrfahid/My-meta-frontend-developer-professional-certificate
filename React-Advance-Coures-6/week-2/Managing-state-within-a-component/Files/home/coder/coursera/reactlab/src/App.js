import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Shah",
    lastName: "Fahid",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  function spendGiftCard() {
    setGiftCard((prevState) => {
      // Step 3: Return a copy of the prevState object
      return { ...prevState, 
        // Step 4: Update the 'text' property
        text: "Your coupon has been used.", 
        // Step 5: Update the 'valid' property
        valid: false, 
        // Step 5: Update the 'instructions' property
        instructions: "Please visit our restaurant to renew your gift card."
      };
    });
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>Gift Card Page</h1>
      <h2>Customer: {giftCard.firstName} {giftCard.lastName}</h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>Spend Gift Card</button>
      )}
    </div>
  );
}
