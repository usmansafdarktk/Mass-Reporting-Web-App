import React from 'react';

interface RequestCardProps {
  name: string;
  email: string;
  role: string;
  organization: string;
  onAccept: () => void;
  onReject: () => void;
}

const RequestCard: React.FC<RequestCardProps> = ({ name, email, role, organization, onAccept, onReject }) => {
  return (
    <div className="p-4 border rounded-md bg-white flex justify-between items-center shadow-[0px_0px_4px_rgba(24,54,178,1)]">
      <div>
        <h3 className="text-lg font-semibold text-black">{name}</h3>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-500">Role: {role}</p>
        <p className="text-gray-500">Organization: {organization}</p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={onAccept}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Accept
        </button>
        <button
          onClick={onReject}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default RequestCard;