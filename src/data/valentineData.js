export const valentineWeekDays = [
    {
        id: 'rose-day',
        name: 'Rose Day',
        date: 'February 7',
        day: 7,
        icon: '🌹',
        description: 'The sweet beginning of Valentine\'s Week',
        message: 'My dearest Roshni, like a rose that blooms in the garden of love, you have blossomed in my heart forever. Each petal represents a reason why I love you. Happy Rose Day, my beautiful flower! 🌹',
        color: '#e74c3c'
    },
    {
        id: 'propose-day',
        name: 'Propose Day',
        date: 'February 8',
        day: 8,
        icon: '💍',
        description: 'Declare your love with all your heart',
        message: 'Roshni, every day with you feels like a beautiful proposal. I choose you today, tomorrow, and forever. You are my forever YES! Will you be mine for all eternity? 💍✨',
        color: '#9b59b6'
    },
    {
        id: 'chocolate-day',
        name: 'Chocolate Day',
        date: 'February 9',
        day: 9,
        icon: '🍫',
        description: 'Share the sweetness of your love',
        message: 'Roshni, you are sweeter than the finest chocolate! Your love melts my heart and fills my life with sweetness. Every moment with you is like savoring the most delicious treat! 🍫💕',
        color: '#8B4513'
    },
    {
        id: 'teddy-day',
        name: 'Teddy Day',
        date: 'February 10',
        day: 10,
        icon: '🧸',
        description: 'Gift something soft and cuddly',
        message: 'My cuddly Roshni, just like how a teddy brings comfort and warmth, you are my source of endless comfort. I want to hold you close like the most precious teddy in the world! 🧸❤️',
        color: '#d4a373'
    },
    {
        id: 'promise-day',
        name: 'Promise Day',
        date: 'February 11',
        day: 11,
        icon: '🤞',
        description: 'Make promises that last forever',
        message: 'To my beloved Roshni, I promise to love you unconditionally, to support your dreams, to be your best friend, and to make you smile every single day. These promises are written on my heart! 🤞💖',
        color: '#3498db'
    },
    {
        id: 'hug-day',
        name: 'Hug Day',
        date: 'February 12',
        day: 12,
        icon: '🤗',
        description: 'Embrace with all your love',
        message: 'Roshni, my arms have found their home when they\'re wrapped around you. Your hugs heal my soul and make everything feel right. I want to hold you close forever! 🤗💕',
        color: '#e91e63'
    },
    {
        id: 'kiss-day',
        name: 'Kiss Day',
        date: 'February 13',
        day: 13,
        icon: '💋',
        description: 'Seal your love with a kiss',
        message: 'My darling Roshni, every kiss shared with you feels like magic. Your lips are like rose petals, and your kisses make my heart dance with joy. You are my sweet addiction! 💋❤️',
        color: '#c0392b'
    },
    {
        id: 'valentines-day',
        name: "Valentine's Day",
        date: 'February 14',
        day: 14,
        icon: '❤️',
        description: 'The day of love and romance',
        message: 'Happy Valentine\'s Day, my dearest Roshni! You are the love of my life, my soulmate, my everything. Every heartbeat of mine whispers your name. I love you more than words can ever express! ❤️🌹',
        isSpecial: true,
        color: '#e74c3c'
    }
];

// Helper function to check if a day is accessible (past or present)
export const isDayAccessible = (dayNum) => {
    const today = new Date();
    const currentMonth = today.getMonth(); // 0-11 (January = 0, February = 1)
    const currentDay = today.getDate();

    // Valentine's week is in February (month index 1)
    // If it's February, compare the day
    if (currentMonth === 1) {
        return dayNum <= currentDay;
    }
    // If it's after February, all days are accessible
    if (currentMonth > 1) {
        return true;
    }
    // If it's before February, no days are accessible
    return false;
};

export const successMessage = {
    title: "YES! 💖 I Knew It!",
    mainMessage: "You just made me the happiest person in the world! My heart is dancing with joy! 💃🕺",
    loveNote: "Roshni, you are the reason I believe in love. Your smile lights up my darkest days, your laugh is the melody of my heart, and your love is the greatest gift I've ever received.",
    specialText: "Together we are unstoppable! You complete me in ways I never knew possible. Every day with you is an adventure filled with love, laughter, and beautiful memories.",
    forever: "Forever & Always, Together in Love 💕"
};
