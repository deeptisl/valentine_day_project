import { useState } from 'react';
import './App.css';
import FloatingHearts from './components/FloatingHearts';
import Header from './components/Header';
import DayCard from './components/DayCard';
import DayDetail from './components/DayDetail';
import ValentinePage from './components/ValentinePage';
import { valentineWeekDays } from './data/valentineData';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'detail', 'valentine'
  const [selectedDay, setSelectedDay] = useState(null);



  const handleDayClick = (day) => {
    if (day.isSpecial) {
      setCurrentView('valentine');
    } else {
      setSelectedDay(day);
      setCurrentView('detail');
    }
  };

  const handleBack = () => {
    setCurrentView('home');
    setSelectedDay(null);
  };

  return (
    <div className="app-container">
      <FloatingHearts />

      {currentView === 'home' && (
        <>
          <Header />
          <div className="week-container">
            {valentineWeekDays.map((day) => (
              <DayCard
                key={day.id}
                day={day}
                onClick={handleDayClick}
              />
            ))}
          </div>
          <footer style={{
            marginTop: '40px',
            textAlign: 'center',
            padding: '20px',
            color: '#c44569',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.3rem'
          }}>
            Made with 💖 by Deepak for his beloved Roshni
          </footer>
        </>
      )}

      {currentView === 'detail' && selectedDay && (
        <DayDetail day={selectedDay} onBack={handleBack} />
      )}

      {currentView === 'valentine' && (
        <ValentinePage onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
