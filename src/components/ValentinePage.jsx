import { useState, useRef } from 'react';
import Confetti from './Confetti';
import { successMessage } from '../data/valentineData';

const ValentinePage = ({ onBack }) => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [hasMoved, setHasMoved] = useState(false);
    const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
    const containerRef = useRef(null);
    const noButtonRef = useRef(null);

    const moveNoButton = () => {
        if (!noButtonRef.current) return;

        const button = noButtonRef.current.getBoundingClientRect();

        // Calculate maximum positions with padding
        const maxX = window.innerWidth - button.width - 30;
        const maxY = window.innerHeight - button.height - 30;
        const minX = 30;
        const minY = 30;

        // Random position
        let newX = minX + Math.random() * (maxX - minX);
        let newY = minY + Math.random() * (maxY - minY);

        // Make sure it's at least 150px away from current position
        const currentX = button.left;
        const currentY = button.top;

        let attempts = 0;
        // Keep generating new position until it's far enough from current
        while (
            Math.abs(newX - currentX) < 150 &&
            Math.abs(newY - currentY) < 150 &&
            attempts < 15
        ) {
            newX = minX + Math.random() * (maxX - minX);
            newY = minY + Math.random() * (maxY - minY);
            attempts++;
        }

        setHasMoved(true);
        setNoButtonPosition({
            left: newX,
            top: newY,
        });
    };

    const handleYesClick = () => {
        setShowSuccess(true);
    };

    if (showSuccess) {
        return (
            <div className="valentine-page">
                <Confetti />
                <button className="back-btn" onClick={onBack}>
                    ← Back to Week
                </button>

                <div className="valentine-success">
                    <span className="hearts-rain">💖💕💗</span>
                    <h1>{successMessage.title}</h1>

                    <p className="love-message">
                        {successMessage.mainMessage}
                    </p>

                    <p className="special-text">
                        {successMessage.loveNote}
                    </p>

                    <p className="special-text">
                        {successMessage.specialText}
                    </p>

                    <div className="couple-names">
                        <span>Deepak</span>
                        <span className="heart">❤️</span>
                        <span>Roshni</span>
                    </div>

                    <p className="forever">
                        {successMessage.forever}
                    </p>

                    <div style={{
                        marginTop: '30px',
                        fontSize: '3rem'
                    }}>
                        💑 👫 💏 🌹 💝
                    </div>
                </div>
            </div>
        );
    }

    // Styles for the No button - starts next to Yes, then moves around when hovered/clicked
    const noButtonStyle = hasMoved
        ? {
            position: 'fixed',
            left: `${noButtonPosition.left}px`,
            top: `${noButtonPosition.top}px`,
            transition: 'all 0.2s ease-out',
        }
        : {
            position: 'relative',
            transition: 'all 0.2s ease-out',
        };

    return (
        <div className="valentine-page" ref={containerRef}>
            <button className="back-btn" onClick={onBack}>
                ← Back to Week
            </button>

            <div className="valentine-question">
                <span className="heart-big">💘</span>
                <h2>My Dearest Roshni...</h2>
                <p>Will you be my Valentine forever and ever? 💕</p>

                <div className="button-container">
                    <button className="yes-btn" onClick={handleYesClick}>
                        Yes! 💖
                    </button>
                    <button
                        ref={noButtonRef}
                        className="no-btn"
                        onMouseEnter={moveNoButton}
                        onClick={moveNoButton}
                        style={noButtonStyle}
                    >
                        No 😢
                    </button>
                </div>
            </div>

            <p style={{
                marginTop: '30px',
                color: '#c44569',
                fontStyle: 'italic',
                fontSize: '1rem'
            }}>
                💡 Hint: Try clicking "No" if you can catch it! 😉
            </p>
        </div>
    );
};

export default ValentinePage;
