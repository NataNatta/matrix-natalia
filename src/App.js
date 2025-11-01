import React, { useState } from 'react';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [result, setResult] = useState('');

  const dayToArchetype = {
    1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
    11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18,
    19: 19, 20: 20, 21: 21, 22: 22,
    23: 5, 24: 6, 25: 7, 26: 8, 27: 9, 28: 10, 29: 11, 30: 12, 31: 13
  };

  function getArchetypeFromDay(day) {
    return dayToArchetype[day] || "Невідома дата";
  }

  function showArchetype() {
    if (!birthdate) return;
    const [year, month, day] = birthdate.split("-").map(Number);
    const archetype = getArchetypeFromDay(day);
    setResult(`Для дати ${day}.${month}.${year} → аркан ${archetype}`);
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
      <br />
      <button onClick={showArchetype} style={{ fontSize: '1em', marginTop: '10px' }}>
        Показати аркан
      </button>
      <div id="result" style={{ marginTop: '20px', fontSize: '1.2em' }}>
        {result}
      </div>
    </div>
  );
}

export default App;
