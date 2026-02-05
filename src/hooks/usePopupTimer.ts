import { useState, useEffect } from 'react';

const POPUP_STORAGE_KEY = 'vipigo_popup_closed';
const POPUP_DELAY_MS = 30000; // 30 seconds
const POPUP_COOLDOWN_MS = 2 * 60 * 60 * 1000; // 2 hours

export function usePopupTimer() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const checkPopupStatus = () => {
      const closedTimestamp = localStorage.getItem(POPUP_STORAGE_KEY);
      
      if (!closedTimestamp) {
        // First time visit, show after 30 seconds
        const timer = setTimeout(() => {
          setShowPopup(true);
        }, POPUP_DELAY_MS);
        
        return () => clearTimeout(timer);
      } else {
        // Check if 2 hours have passed
        const timestamp = parseInt(closedTimestamp, 10);
        const now = Date.now();
        const timePassed = now - timestamp;
        
        if (timePassed >= POPUP_COOLDOWN_MS) {
          // 2 hours passed, show again after 30 seconds
          const timer = setTimeout(() => {
            setShowPopup(true);
          }, POPUP_DELAY_MS);
          
          return () => clearTimeout(timer);
        }
      }
    };

    checkPopupStatus();
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString());
  };

  return { showPopup, closePopup };
}
