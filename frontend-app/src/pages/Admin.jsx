import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Admin() {

  const navigate = useNavigate();
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));
  const [interests, setInterests] = useState(JSON.parse(localStorage.getItem("interests")));
  const [currentEditUser, setCurrentEditUser] = useState({});
  const [currentEditInterest, setCurrentEditInterest] = useState('');
  const [userModalVisibility, setUserModalVisibility] = useState("hidden");
  const [interestModalVisibility, setInterestModalVisibility] = useState("hidden");

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const deleteUser = (user) => {
    let userIndex = users?.findIndex(u => u.id == user.id)
    let remainingUsers = users;
    remainingUsers?.splice(userIndex, 1);
    setUsers(remainingUsers);
    setUserModalVisibility("hidden");
    localStorage.setItem("users", JSON.stringify(remainingUsers));
    window.location.reload(false);
  }
  const deleteInterest = (interest) => {
    let interestIndex = interests?.findIndex(i => i.id == interest.id)
    let remainingInterests = interests;
    remainingInterests?.splice(interestIndex, 1);
    setInterests(remainingInterests);
    setInterestModalVisibility("hidden");
    localStorage.setItem("interests", JSON.stringify(remainingInterests));
    window.location.reload(false);
  }

  const submitUser = () => {
    let newUsers = users?.map((user) => user?.id == currentEditUser?.id ? currentEditUser : user);
    setUsers(newUsers);
    setUserModalVisibility("hidden");
    localStorage.setItem("users", JSON.stringify(newUsers));
  }
  const submitInterest = () => {
    if (currentEditInterest?.id) {
      let newInterests = interests?.map((interest) => interest?.id == currentEditInterest?.id ? currentEditInterest : interest);
      setInterests(newInterests);
      setUserModalVisibility("hidden");
      localStorage.setItem("interests", JSON.stringify(newInterests));
    } else {
      currentEditInterest.id = interests.length + 1;
      let newInterests = [...interests, currentEditInterest]
      setInterests(newInterests);
      localStorage.setItem("interests", JSON.stringify(newInterests));
    }
  }
  const editUser = (user) => {
    setUserModalVisibility("visible")
    setCurrentEditUser(user)
  }
  const editInterest = (interest) => {
    setInterestModalVisibility("visible")
    setCurrentEditInterest(interest)
  }

  return (
    <div className='bg-[#000814] text-[#fff] min-h-screen w-full h-full overflow-y-scroll flex flex-col gap-4 justify-start items-start p-3'>
      <div className=' w-full flex justify-end px-4'>
        <button className='btn logBtn' onClick={handleLogout}>Logout</button>
      </div>
      <div className='flex flex-row gap-3 items-start w-full'>
        <div className='container flex flex-col justify-center gap-8'>
          <h1 className='text-4xl'>User managent</h1>
          <div className='flex flex-col w-2/3 gap-2'>
            {users?.map((user, index) => (
              <div key={index} className='grid grid-cols-2 gap-10 bg-zinc-700 p-4 rounded-lg'>
                <div className=' flex flex-col gap-2'>
                  <h4>{user?.name}</h4>
                  <h4>{user?.email}</h4>
                </div>
                <div className='flex flex-row gap-6'>
                  <button disabled={user?.email == "admin@gmail.com"} onClick={() => editUser(user)} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal">Edit</button>
                  <button disabled={user?.email == "admin@gmail.com"} onClick={() => deleteUser(user)}>Delete</button>
                </div>
              </div>
            ))}

          </div>
        </div>
        <div className='container flex flex-col justify-center gap-8'>
          <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={`${userModalVisibility} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-1/2 z-50 justify-start items-center h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative top-10 left-0 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {currentEditUser?.name}
                  </h3>
                  <button type="button" onClick={() => setUserModalVisibility("hidden")} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <form className="space-y-4" action="#">
                    <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                      <input type="username" name="username" id="username" value={currentEditUser?.name}
                        onChange={(e) => setCurrentEditUser((value) => ({
                          ...value,
                          name: e.target.value
                        }))}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Email</label>
                      <input type="email" name="email" id="email" value={currentEditUser?.email}
                        onChange={(e) => setCurrentEditUser((value) => ({
                          ...value,
                          email: e.target.value
                        }))}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <button type="submit" onClick={submitUser} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-3 items-start w-full'>
        <div className='container flex flex-col justify-center gap-8'>
          <div className='flex flex-row'>
            <h1 className='w-full text-4xl'>Technology managent</h1>
            <div className='  flex justify-end px-4'>
              <button className='w-full btn logBtn p-2' onClick={() => editInterest('')}>Add Technology</button>
            </div>
          </div>
          <div className='flex flex-col w-2/3 gap-2'>
            {interests?.map((interest, index) => (
              <div key={index} className='grid grid-cols-2 gap-10 bg-zinc-700 p-4 rounded-lg'>
                <div className=' flex flex-col gap-2'>
                  <h4>{interest.tech}</h4>
                </div>
                <div className='flex flex-row gap-6'>
                  <button onClick={() => editInterest(interest)} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal">Edit</button>
                  <button onClick={() => deleteInterest(interest)}>Delete</button>
                </div>
              </div>
            ))}

          </div>
        </div>
        <div className='container flex flex-col justify-center gap-8'>
          <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={`${interestModalVisibility} overflow-y-auto overflow-x-hidden fixed top-96 right-0 left-1/2 z-50 justify-start items-center h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative top-10 left-0 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {currentEditInterest?.tech}
                  </h3>
      
                  <button type="button" onClick={() => setInterestModalVisibility("hidden")} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5">
                  <form className="space-y-4" action="#">
                    <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Technology</label>
                      <input type="username" name="username" id="username" value={currentEditInterest?.tech}
                        onChange={(e) => setCurrentEditInterest((value) => ({
                          ...value,
                          tech: e.target.value
                        }))}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>

                    <button type="submit" onClick={submitInterest} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin