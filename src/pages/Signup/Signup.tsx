import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '/images/logo.png';
import { signUpUser } from '../../utils/userauth';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  organization: string;
  agentId: string;
  location: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    agentId: '',
    location: '',
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please check and try again.");
      return;
    }

    try {
      await signUpUser(
        formData.name,
        formData.email,
        formData.password,
        formData.organization,
        formData.agentId,
        formData.location
      );
      navigate("/requestpending");
    } catch (error: any) {
      alert(`Error: ${error.message}`);
    }
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

      {/* Sign-Up Form */}
      <div className="p-8 rounded-lg w-auto bg-gray-100 shadow-[0px_0px_4px_rgba(24,54,178,1)]">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">Sign Up</h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          {/* Name and Email Fields */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="text-sm font-medium block">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g., John Doe"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full bg-white border-gray-300"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="email" className="text-sm font-medium block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g., john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full bg-white border-gray-300"
                required
              />
            </div>
          </div>

          {/* Password and Confirm Password Fields */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="e.g., ********"
                  value={formData.password}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full bg-white border-gray-300"
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
            </div>

            <div className="flex-1">
              <label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="e.g., ********"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full bg-white border-gray-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-2 text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
          </div>

          {/* Organization and Agent ID Fields */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="organization" className="text-sm font-medium">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="e.g., ABC Corp"
                value={formData.organization}
                onChange={handleChange}
                className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white border-gray-300"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="agentId" className="text-sm font-medium">
                Agent ID
              </label>
              <input
                type="text"
                id="agentId"
                name="agentId"
                placeholder="e.g., 12345"
                value={formData.agentId}
                onChange={handleChange}
                className="px-4 py-2 ml-4 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white border-gray-300"
                required
              />
            </div>
          </div>

          {/* Location Field */}
          <label htmlFor="location" className="text-sm font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="e.g., Lahore, Punjab"
            value={formData.location}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white border-gray-300"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="py-2 rounded-md font-semibold bg-[#1836b2] text-white hover:shadow-lg transition-all"
          >
            Sign Up
          </button>
        </form>

        {/* Additional Options */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-gray-800 hover:underline border-none bg-transparent focus:outline-none"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
