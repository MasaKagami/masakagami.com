import { useEffect } from 'react';

function BudgetrRedirect() {
  useEffect(() => {
    // Redirects to the external URL
    window.location.href = 'https://myfinanceplanner.onrender.com/';
  }, []);

  return null;  // This component does not render anything
}

export default BudgetrRedirect;
