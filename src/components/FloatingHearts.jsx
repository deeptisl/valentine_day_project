import { useEffect, useState } from 'react';

const FloatingHearts = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const createHeart = () => {
            const id = Date.now();
            const heart = {
                id,
                left: Math.random() * 100,
                animationDuration: 4 + Math.random() * 4,
                size: 15 + Math.random() * 20,
                delay: Math.random() * 2,
            };
            setHearts(prev => [...prev, heart]);

            // Remove heart after animation
            setTimeout(() => {
                setHearts(prev => prev.filter(h => h.id !== id));
            }, (heart.animationDuration + heart.delay) * 1000);
        };

        // Create hearts periodically
        const interval = setInterval(createHeart, 800);

        // Create initial hearts
        for (let i = 0; i < 5; i++) {
            setTimeout(createHeart, i * 300);
        }

        return () => clearInterval(interval);
    }, []);

    const heartEmojis = ['💕', '💖', '💗', '💓', '💝', '💘', '❤️', '💜', '🩷'];

    return (
        <div className="hearts-bg">
            {hearts.map(heart => (
                <span
                    key={heart.id}
                    className="floating-heart"
                    style={{
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}px`,
                        animationDuration: `${heart.animationDuration}s`,
                        animationDelay: `${heart.delay}s`,
                    }}
                >
                    {heartEmojis[Math.floor(Math.random() * heartEmojis.length)]}
                </span>
            ))}
        </div>
    );
};

export default FloatingHearts;
