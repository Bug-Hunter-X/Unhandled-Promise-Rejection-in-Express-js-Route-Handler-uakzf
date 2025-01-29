const express = require('express');
const app = express();

app.get('/', async (req, res, next) => {
  try {
    // Asynchronous operation
    await someAsyncOperation();
    res.send('Hello World!');
  } catch (err) {
    // Pass error to error handling middleware
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('Something went wrong!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error
      reject(new Error('Something went wrong'));
    }, 1000);
  });
}