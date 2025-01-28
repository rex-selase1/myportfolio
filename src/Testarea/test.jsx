import  { useState, useEffect } from 'react';

function ScrollPosition() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Ensure we're reading the scroll position from the document body
            setScrollY(window.scrollY || document.documentElement.scrollTop);
        };

        // Attach the scroll event listener to the window
        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to ensure this runs once on mount

    return (
        <div>
            <h1>Scroll Position</h1>
            <p>Current scroll position: {scrollY}px</p>
            {/* Add enough content to scroll */}
            <div style={{ height: '1500px' }}>
                <p>Scroll down to see the scroll position update.</p>
            </div>
        </div>
    );
}

export default ScrollPosition;
