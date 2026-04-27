// Axios is a popular HTTP client library for making requests to APIs. In this example, we will use Axios to fetch data from a public API and handle the response with proper TypeScript types.
import axios, { isAxiosError } from 'axios';
import type { AxiosResponse } from 'axios';

// Define the structure of the data we expect to receive from the API
interface Todo {
  userId: number,
  id: number,
  title: string,
  body: string
}

// Function to fetch data from the API using Axios
const fetchData = async () => {
    try {
        // Make a GET request to the API and specify the expected response type
        const response: AxiosResponse<Todo> = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Todo:', response.data);
    } catch (error: unknown) {
        // Check if the error is an Axios error and handle it accordingly using custom type guard of Axios
        if (isAxiosError(error)) {
            console.error('Axios error:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
    }
}