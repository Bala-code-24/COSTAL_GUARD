import React from 'react';

function Profile({ userData }) {
  return (
    <div className="profile bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg mb-6 max-w-md mx-auto">
      <h2 className="text-2xl font-extrabold text-blue-900 mb-4 border-b-2 border-blue-200 pb-2">
        User Profile
      </h2>
      <div className="space-y-4 text-gray-800">
        <p className="flex items-center">
          <span className="font-semibold mr-2">Name:</span>
          <span className="text-blue-700">{userData.name}</span>
        </p>
        <p className="flex items-center">
          <span className="font-semibold mr-2">Email:</span>
          <span className="text-blue-700">{userData.email}</span>
        </p>
        <p className="flex items-center">
          <span className="font-semibold mr-2">Mobile Number:</span>
          <span className="text-blue-700">{userData.phone}</span>
        </p>
        <p className="flex items-center">
          <span className="font-semibold mr-2">Role:</span>
          <span className="text-blue-700">{userData.role}</span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
