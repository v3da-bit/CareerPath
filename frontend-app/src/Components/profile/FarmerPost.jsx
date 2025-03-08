import React from 'react'

const FarmerPost = () => {
  return (
    <>
      <div className="px-8 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
            Certificates
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((post) => (
              <div
                key={post}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src="images/cer.jpg"
                  alt={`Post ${post}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <p className="text-md text-gray-700 dark:text-gray-300">
                      Quizey's Certificate
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default FarmerPost
