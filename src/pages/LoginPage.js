import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/account-settings');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gray-50 px-4 py-6">
      <div className="w-full sm:max-w-md">
        <h2 className="text-2xl font-bold mb-2">Signin to your <br/>PopX account</h2>
        <p className="text-sm text-gray-500 mb-5">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,</p>
        <form className="flex flex-col space-y-1" onSubmit={handleSubmit}>
          
                <div className="flex flex-col relative mb-6">
                    <label  className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3 " for="email">Email address<span className="text-red-500">*</span></label>
                    <input type="text" id="email" name="email" className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300" placeholder="Enter your email address"/>
                </div>

         
                <div className="flex flex-col relative mb-4">
                    <label className="absolute bg-white font-semibold text-md text-violet-600 p-1 -top-4 left-3 " for="password">Password<span className="text-red-500">*</span></label>
                    <input type="password" id="password" name="password" className="px-4 py-3 outline-none  border border-gray-300 rounded-lg transition-all duration-300" placeholder="Enter password"/>
                </div>


          <div className="mt-auto w-full sm:max-w-md mx-auto pt-3">
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
