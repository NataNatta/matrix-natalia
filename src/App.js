import React, { useState } from 'react';

function App() {
  const [birthdate, setBirthdate] = useState('');

  let day, month, year;
  if (birthdate) {
    const parts = birthdate.split('-');
    year = Number(parts[0]);
    month = Number(parts[1]);
    day = Number(parts[2]);
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Введи дату народження</h2>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        style={{ fontSize: '1em', marginTop: '10px' }}
      />
      {birthdate && (
        <div style={{ marginTop: '20px', fontSize: '1.2em' }}>
          <p>День: {day}</p>
          <p>Місяць: {month}</p>
          <p>Рік: {year}</p>
        </div>
      )}
    </div>
  );
}

export default App;
