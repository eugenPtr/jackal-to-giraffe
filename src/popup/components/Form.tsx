import React, { useState } from 'react';

enum Input {
    MESSAGE = "message",
    RESPONSE = "response",
    TONE = "tone",
    TEMPERATURE = "temperature",
}

function MyForm() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [tone, setTone] = useState('Choose your tone');
  const [temperature, setTemperature] = useState(50);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      message,
      response,
      tone,
      temperature
    };

    // Send the formData to the API using an HTTP POST request
    fetch('your-api-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API if needed
      })
      .catch(error => {
        // Handle any errors that occurred during the request
      });
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    if (name === Input.MESSAGE) {
      setMessage(value);
    } else if (name === Input.RESPONSE) {
      setResponse(value);
    } else if (name === Input.TONE) {
      setTone(value);
    } else if (name === Input.TEMPERATURE) {
      setTemperature(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='text-left'>
      <div className="mb-[25px]">
        <label htmlFor={Input.MESSAGE} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Their message
        </label>
        <textarea
          id={Input.MESSAGE}
          name={Input.MESSAGE}
          rows="4"
          value={message}
          onChange={handleInputChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      <div className="mb-[25px]">
        <label htmlFor={Input.RESPONSE} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          What do you want to communicate?
        </label>
        <textarea
          id={Input.RESPONSE}
          name={Input.RESPONSE}
          rows="4"
          value={response}
          onChange={handleInputChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      <div className="mb-[25px]">
        <label htmlFor={Input.TONE} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Choose your tone
        </label>
        <select
          id={Input.TONE}
          name={Input.TONE}
          value={tone}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled>Choose your tone</option>
          <option value="crypto-bro">Crypto Bro</option>
          <option value="corporate-boss">Corporate Final Boss</option>
          <option value="spiritual-leader">Spiritual Leader</option>
        </select>
      </div>

      <div className="mb-[25px]"> 
        <label htmlFor={Input.TEMPERATURE} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Temperature: {temperature}
        </label>
        <input
          id={Input.TEMPERATURE}
          name={Input.TEMPERATURE}
          type="range"
          value={temperature}
          onChange={handleInputChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer  dark:bg-gray-700"
          />
        </div>
  
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    );
  }
  
  export default MyForm;
