import React from 'react';

interface InspectorProfileCardProps {
  imagePath: string;
  name: string;
  rank: string;
  department: string;
  contactInfo: string;
  bio: string;
  totalComplaints: number;
  complaintsStatus: {
    open: number;
    inProgress: number;
    resolved: number;
  };
}

const InspectorProfileCard: React.FC<InspectorProfileCardProps> = ({
  imagePath,
  name,
  rank,
  department,
  contactInfo,
  bio,
  totalComplaints,
  complaintsStatus,
}) => {
  return (
    <div className="bg-white border border-gray-300 shadow-lg rounded-lg w-full max-w-xs mx-auto p-4">
      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src={imagePath}
          alt={`${name}'s photo`}
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
      </div>

      {/* Text Section */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{rank}</p>
        <p className="text-sm text-gray-500 mb-2">{department}</p>

        {/* Contact Information */}
        <p className="text-sm text-gray-500 mb-4">{contactInfo}</p>

        {/* Short Bio */}
        {/* <p className="text-sm text-gray-600 mb-4">{bio}</p> */}
      </div>

      {/* Complaints Overview */}
      <div className="bg-gray-50 p-3 rounded-lg mt-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Complaints Overview</h4>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Total Complaints:</span>
          <span className="font-semibold">{totalComplaints}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Open:</span>
          <span className="font-semibold text-red-500">{complaintsStatus.open}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>In Progress:</span>
          <span className="font-semibold text-yellow-500">{complaintsStatus.inProgress}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Resolved:</span>
          <span className="font-semibold text-green-500">{complaintsStatus.resolved}</span>
        </div>
      </div>
    </div>
  );
};

export default InspectorProfileCard;
