import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import logo from "/images/logo.png";

interface FormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (error) {
      setError(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError(null);

    // Simulate login process
    setTimeout(() => {
      setLoading(false);
      if (email === 'user@example.com' && password === 'password') {
        navigate('/dashboard');
      } else {
        setError('Invalid credentials, please try again.');
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-white text-black ">
      {/* Back Arrow Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 text-lg focus:outline-none"
      >
        <FaArrowLeft className="text-2xl text-black hover:opacity-80 transition-opacity" />
      </button>

      <div className="flex justify-start gap-x-4 items-center">
        <img src={logo} alt="Main Logo" className="h-16 w-16 mb-6" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2 drop-shadow-lg">
          AI Mass Reporting 
        </h1>
      </div>

      {/* Login Form */}
      <div className="p-8 rounded-lg w-96 bg-gray-100 shadow-[0px_0px_4px_rgba(24,54,178,1)]">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">
          Log In
        </h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
            required
          />
          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-2 text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="py-2 rounded-md font-semibold bg-[#1836b2] text-white hover:shadow-lg transition-all"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-gray-600 mt-4 text-center">
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            className="text-gray-800 hover:underline border-none bg-transparent focus:outline-none"
          >
            Signup
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
