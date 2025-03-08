import { useEffect } from "react";

const useClearLocalStorageOnReload = (key) => {
  useEffect(() => {
    // This will run when the component mounts
    const clearOnReload = () => {
      localStorage.removeItem(key); // Remove the specific key
      console.log(`${key} removed from localStorage on reload`);
    };

    // Add event listener for the page reload
    window.addEventListener("load", clearOnReload);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("load", clearOnReload);
    };
  }, [key]); // Dependency on the key
};

export default useClearLocalStorageOnReload;