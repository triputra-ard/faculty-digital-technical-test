export default function (value: number, max_value: number): number {
  let currentValue = value;

  setInterval(() => {
    console.log(currentValue++);
  }, 1000);
  //   // Start the interval
  //   const intervalId = setInterval(
  //     () => {
  //       if (currentValue < max_value) {
  //         currentValue++;
  //         if (callback) {
  //           callback(currentValue); // Call the callback with the updated value
  //         }
  //       } else {
  //         clearInterval(intervalId); // Stop the counter when max_value is reached
  //       }
  //     },
  //     interval ? interval : 1000
  //   ); // Increment every second

  //   return () => {
  //     clearInterval(intervalId); // Return a function to stop the counter manually if needed
  //   };
}
