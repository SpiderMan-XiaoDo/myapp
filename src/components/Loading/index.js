import React, { useState, useEffect } from 'react';
import './LoadingAnimation.css'; // Import CSS file

function LoadingAnimation() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prevProgress => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          window.location.href = 'http://localhost:3000/login1'
          return 100;
        }
      });
    }, 30); // Tăng độ lấp dần mỗi 30ms

    return () => clearInterval(interval);
  }, []); // Chạy chỉ một lần khi component được render

  return (
    <div className="loading-container">
      <div className="loading-circle" style={{ background: `conic-gradient(#007bff ${loadingProgress}%, transparent ${loadingProgress}%)` }}></div>
    </div>
  );
}

export default LoadingAnimation;
