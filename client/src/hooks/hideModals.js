import { useEffect, useState, useRef } from "react";

const usePopupToggle = () => {
  const closeRef = useRef(null)
  const toggleRef = useRef(null)
  const [open, setOpen] = useState(false)
      // handle close

    // open popup
    const handlePopup = () => {
      setOpen(!open)
    }

    // handle click outside
    const handleClikOutside = (e) => {
      if (toggleRef.current && !toggleRef?.current.contains(e.target) || e.target.classList.contains('modal-close')) {
        setOpen(false)
     }
    }
    useEffect(() => {

      document.addEventListener("click", handleClikOutside);

      return () => document.removeEventListener('click', handleClikOutside)

      
    }, []);

    return {handlePopup, open, toggleRef, setOpen, closeRef}
  };
  
  export default usePopupToggle;