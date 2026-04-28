// In this example, we will use the Fetch API to make a GET request to a public API and handle the response with proper TypeScript types. The Fetch API is a built-in web API for making HTTP requests, and it returns a Promise that resolves to the Response object.

// Define the structure of the data we expect to receive from the API
interface Todo {
  userId: number,
  id: number,
  title: string,
  body: string
}

// Function to fetch data from the API using Fetch API
const fetchData = async () => {
    try {
        // Make a GET request to the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const data: Todo = await response.json();
        console.log('Todo:', data);
    } catch (error: unknown) {
        // Check if the error is an instance of Error and handle it accordingly using type guard of Error
        if (error instanceof Error) {
            console.error('Fetch error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
}