import React, { useState, useEffect } from 'react';
import LoadScreen from '../screens/LoadScreen'; // Correct import
import HomeScreen from '../screens/HomeScreen'; // Assuming this is your main component


function LoadingComponent() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer);
    }, []);
  return (
    <div className="App">
    {loading ? <LoadScreen /> : <HomeScreen />}
</div>
  )
}

export default LoadingComponent