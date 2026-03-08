const DayDetail = ({ day, onBack }) => {
    return (
        <div className="day-detail">
            <button className="back-btn" onClick={onBack}>
                ← Back to Week
            </button>

            <div className="day-detail-card">
                <span className="icon">{day.icon}</span>
                <h2>{day.name}</h2>
                <p className="date">{day.date}</p>

                <div className="message">
                    {day.message}
                </div>

                <p className="love-note">
                    "My love for you grows stronger with each passing day..."
                </p>

                <p className="signature">
                    ~ With all my love, Deepak 💕
                </p>
            </div>
        </div>
    );
};

export default DayDetail;
