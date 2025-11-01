import React, { useState } from 'react';

function App() {
  const [birthday, setBirthday] = useState('');
  const [zodiac, setZodiac] = useState('');

  const getZodiac = (day, month) => {
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Водолій';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Риби';
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Овен';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Телець';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Близнюки';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Рак';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Лев';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Діва';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Терези';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Скорпіон';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Стрілець';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Козоріг';
    return 'Невідомо';
  };

  const handleClick = () => {
    if (!birthday) return;
    const [year, month, day] = birthday.split('-').map(Number);
    const sign = getZodiac(day, month);
    setZodiac(`Для дати ${day}.${month}.${year} → знак зодіаку: ${sign}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Введи дату народження</h2>
      <input
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        style={{ fontSize: '1em', marginTop: '10px' }}
      />
      <br />
      <button onClick={handleClick} style={{ fontSize: '1em', marginTop: '10px' }}>
        Показати знак зодіаку
      </button>
      <div style={{ marginTop: '20px', fontSize: '1.2em' }}>
        {zodiac}
      </div>
    </div>
  );
}

export default App;
