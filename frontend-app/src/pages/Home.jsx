
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/common/Navbar';
import Dashboard from '../Components/Home/Dashboard';

const Home = () => {
  let defaultInterests = [{ "tech": "js", "id": 1 }, { "tech": "css", "id": 2 }, { "tech": "html", "id": 3 }];
  const [step, setStep] = useState(1); // Step 1: Qualification, Step 2: Interests
  const [showPopup, setShowPopup] = useState(false); // Show popup
  const [qualification, setQualification] = useState('');
  const [interests, setInterests] = useState((JSON.parse(localStorage.getItem("interests")) || [...defaultInterests]).map(interest=>interest?.tech));
  const [showSkip, setShowSkip] = useState(false); // Skip button control

  useEffect(() => {
    // Check localStorage to determine if the popup has already been shown
    const isPopupShown = localStorage.getItem('popupShown');
    if (!isPopupShown) {
      setShowPopup(true); // Show the popup
      localStorage.setItem('popupShown', 'true'); // Mark the popup as shown
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 3000); // Show Skip button after 10 seconds
    return () => clearTimeout(timer);
  }, [step]);

  const handleQualificationSubmit = () => {
    if (qualification || showSkip) {
      setStep(2); // Move to interests
      setShowSkip(false); // Reset Skip for next step
    }
  };

  const handleInterestsSubmit = () => {
    if (interests.length > 0 || showSkip) {
      setShowPopup(false); // Close the popup
    }
  };

  const toggleInterest = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((item) => item !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  return (
    <div className="bg-[#000814] text-[#fff] min-h-screen w-full h-full overflow-y-scroll">
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#000814] rounded-lg shadow-lg p-6 w-11/12 lg:w-[35vw] sm:w-96">
            {step === 1 ? (
              <>
                <h2 className="text-xl font-semibold mb-4 text-center">Your Qualification</h2>
                <label className="block mb-2">Select your qualification:</label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="w-full p-2 border border-gray-700 rounded-lg mb-4 bg-gray-900"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="High School">High School</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="PhD">PhD</option>
                  <option value="Other">Other</option>
                </select>
                <div className="flex justify-end space-x-4">
                  {showSkip && (
                    <button
                      className="px-4 py-2 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
                      onClick={handleQualificationSubmit}
                    >
                      Skip
                    </button>
                  )}
                  <button
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                    onClick={handleQualificationSubmit}
                  >
                    Submit
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-4 text-center">Your Interests</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {interests.map(
                    (interest, index) => (
                      <button
                        key={index}
                        onClick={() => toggleInterest(interest)}
                        className={`px-4 py-2 rounded ${interests.includes(interest)
                            ? 'bg-[#48cae4] text-white'
                            : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                          }`}
                      >
                        {interest}
                      </button>
                    )
                  )}
                </div>
                <div className="flex justify-end space-x-4">
                  {showSkip && (
                    <button
                      className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600"
                      onClick={handleInterestsSubmit}
                    >
                      Skip
                    </button>
                  )}
                  <button
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                    onClick={handleInterestsSubmit}
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default Home;