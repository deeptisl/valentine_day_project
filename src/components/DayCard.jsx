import { isDayAccessible } from '../data/valentineData';

const DayCard = ({ day, onClick }) => {
    const isAccessible = isDayAccessible(day.day);

    const handleClick = () => {
        if (isAccessible) {
            onClick(day);
        }
    };

    return (
        <div
            className={`day-card ${day.isSpecial ? 'valentine-special' : ''} ${!isAccessible ? 'day-card-disabled' : ''}`}
            onClick={handleClick}
            style={{
                '--card-color': day.color,
                cursor: isAccessible ? 'pointer' : 'not-allowed',
            }}
        >
            <span className="icon">{day.icon}</span>
            <h3>{day.name}</h3>
            <p className="date">{day.date}</p>
            <p className="description">{day.description}</p>
            {!isAccessible && (
                <div className="coming-soon-badge">
                    🔒 Coming Soon
                </div>
            )}
        </div>
    );
};

export default DayCard;
