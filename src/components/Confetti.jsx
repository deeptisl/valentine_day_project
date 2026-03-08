import { useEffect, useState } from 'react';

const Confetti = () => {
    const [confetti, setConfetti] = useState([]);

    useEffect(() => {
        const colors = ['#ff6b9d', '#c44569', '#e74c3c', '#f39c12', '#ffb6c1', '#ff69b4', '#ff1493'];
        const shapes = ['❤️', '💖', '💕', '✨', '🌟', '💝', '🎀', '🌹'];

        const pieces = [];
        for (let i = 0; i < 50; i++) {
            pieces.push({
                id: i,
                left: Math.random() * 100,
                delay: Math.random() * 3,
                duration: 3 + Math.random() * 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                shape: shapes[Math.floor(Math.random() * shapes.length)],
                size: 15 + Math.random() * 20,
            });
        }
        setConfetti(pieces);
    }, []);

    return (
        <div className="confetti-container">
            {confetti.map(piece => (
                <span
                    key={piece.id}
                    className="confetti"
                    style={{
                        left: `${piece.left}%`,
                        animationDelay: `${piece.delay}s`,
                        animationDuration: `${piece.duration}s`,
                        color: piece.color,
                        fontSize: `${piece.size}px`,
                    }}
                >
                    {piece.shape}
                </span>
            ))}
        </div>
    );
};

export default Confetti;
