import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Contact_us = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "7d45262a-c273-4fcf-a357-51b6b8a5ab8a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
};


  return (
    <main>
      <div class="bg-[url('/src/assets/Bg1.png')] bg-cover bg-center bg-no-repeat h-[606px] ">
      <div className='justify-center text-center pt-14 mb-14'>
        <h1 className="text-3xl font-bold text-white font-playfair">Contact Us</h1>
      </div>
    <div className="max-w-md mx-auto p-6 bg-ijo bg-opacity-70 rounded-xl shadow-lg">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-white font-semibold mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-white font-semibold mb-2">Message</label>
          <textarea 
            name="message" 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
        >
          Submit Form
        </button>
      </form>
      {result && <p className="mt-4 text-center text-blue-500">{result}</p>}
    </div>
          <div className='flex justify-center items-center text-center'>
            <button
              onClick={handleClick}
              className='flex px-4 py-2 bg-blue-500 text-white rounded '>
                    Kembali ke Halaman Utama
            </button>

          </div>

     </div>
    </main>
  );
};

export default Contact_us;
