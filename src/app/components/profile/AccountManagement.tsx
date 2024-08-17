import React from 'react';

export function AccountManagement() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6">Account Management</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Change Password</h3>
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-500 mb-1">Current Password</label>
              <input
                type="password"
                className="w-full p-2 bg-gray-800 rounded border border-gray-700"
              />
            </div>
            <div>
              <label className="block text-gray-500 mb-1">New Password</label>
              <input
                type="password"
                className="w-full p-2 bg-gray-800 rounded border border-gray-700"
              />
            </div>
            <div>
              <label className="block text-gray-500 mb-1">Confirm New Password</label>
              <input
                type="password"
                className="w-full p-2 bg-gray-800 rounded border border-gray-700"
              />
            </div>
            <button className="w-full bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-700">
              Update Password
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Privacy Settings</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Make my profile public</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Allow notifications</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Show activity status</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Account Actions</h3>
          <div className="mt-4">
            <button className="w-full bg-red-600 p-2 rounded-lg text-white hover:bg-red-700">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
