
import React from "react";
import Navbar from "../Components/common/Navbar";

const Settings = () => {
  return (
    <div className="w-full h-full overflow-y-scroll bg-[#000814] text-[#fff]">
      <Navbar/>
      <div className="flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-8 rounded-lg shadow-lg m-4">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Email Address Section */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value="arissarashid@gmail.com"
          readOnly
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Notification Toggles */}
      <div className="space-y-4 mb-6">
        {[
          { label: "Update Notifications", description: "Receive email notifications on the status of your effects.", id: "update" },
          { label: "Preview Effects", description: "Allow Facebook to preview and test your effects.", id: "preview" },
        ].map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id={item.id}
                className="sr-only peer"
                defaultChecked={item.id !== "milestone"} // Example toggle state
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
            </label>
          </div>
        ))}
      </div>

      {/* Additional Features Section */}
      <div className="space-y-6">
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Theme Settings</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Choose your preferred theme for the application.
          </p>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-indigo-600 focus:outline-none">
              Dark Mode
            </button>
            <button className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none">
              Light Mode
            </button>
          </div>
        </div>

        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Privacy Settings</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Manage your privacy preferences and control who can see your activity.
          </p>
          <label className="flex items-center justify-between">
            <span className="text-sm">Make Profile Public</span>
            <input
              type="checkbox"
              className="sr-only peer"
              defaultChecked={false}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
          </label>
        </div>

        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Language Preferences</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Select your preferred language for the application interface.
          </p>
          <select className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Settings;
