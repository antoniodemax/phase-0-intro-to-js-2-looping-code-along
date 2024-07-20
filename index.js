function writeCards(namesArray, eventName) {
    let messages = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
  
      messages.push(message);
  
      debugger;
    }
  
    return messages;
  }
  
  function countDown(startingNumber) {
  
      // Check if the input is a positive integer
      if (typeof startingNumber !== 'number' || startingNumber < 1 || !Number.isInteger(startingNumber)) {
          console.log("Please provide a positive integer as input.");
          return;
      }
  
      // Start counting down from the startingNumber
      while (startingNumber >= 0) {
          console.log(startingNumber);
          startingNumber--;
      }
      
  }
  
  // Example usage:
  countDown(5);