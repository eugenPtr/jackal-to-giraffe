import React, { useState } from 'react';

function MyForm() {
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('Choose a country');
  const [rangeValue, setRangeValue] = useState(50);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      message,
      country,
      rangeValue,
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'message') {
      setMessage(value);
    } else if (name === 'country') {
      setCountry(value);
    } else if (name === 'rangeValue') {
      setRangeValue(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='text-left'>
      <div className="mb-[25px]">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Their message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={message}
          onChange={handleInputChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      <div className="mb-[25px]">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          What do you want to communicate?
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={message}
          onChange={handleInputChange}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      <div className="mb-[25px]">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Choose your tone
        </label>
        <select
          id="countries"
          name="country"
          value={country}
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
        <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Temperature: {rangeValue}
        </label>
        <input
          id="default-range"
          name="rangeValue"
          type="range"
          value={rangeValue}
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
