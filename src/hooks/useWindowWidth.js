import React, { useState, useEffect} from 'react';

export default function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResizeWindow = (event) => {
        setWindowWidth(event.currentTarget.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow);
        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    },[]);

    return windowWidth;
}