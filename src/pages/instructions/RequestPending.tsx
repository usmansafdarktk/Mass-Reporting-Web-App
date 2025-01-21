
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from "/images/logo.png";

const RequestPage: React.FC = () => {

    const navigate = useNavigate();

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

      {/* Main */}
      <div className="p-8 rounded-lg w-96 bg-gray-100 shadow-[0px_0px_4px_rgba(24,54,178,1)]">
        <p className="text-gray-600 mt-4 text-center text-lg font-bold px-4">
          Your request is being reviewed{' '}
          <br></br>
          <button
            onClick={() => navigate('/')}
            className="text-[#1836b2] hover:underline border-none bg-transparent focus:outline-none"
          >
            Go back to home page!
          </button>
        </p>
      </div>
    </div>
  );
};

export default RequestPage;
