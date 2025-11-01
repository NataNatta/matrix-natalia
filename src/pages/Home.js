// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Ласкаво просимо до калькулятора матриці долі</h1>
      <p>
        Цей калькулятор допоможе тобі розрахувати енергії за датою народження, переглянути розшифровки
        та побудувати свою матрицю. Почни з розділу <strong>Матриця</strong> або обери конкретну енергію.
      </p>
    </div>
  );
}

export default Home;
// src/pages/Home.js
import React, { useState } from 'react';

function Home() {
  const [birthDate, setBirthDate] = useState('');

  const handleChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleSubmit = () => {
    alert(`Обрана дата народження: ${birthDate}`);
    // Тут можна додати логіку розрахунку енергій
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Введи свою дату народження</h1>
      <input
        type="date"
        value={birthDate}
        onChange={handleChange}
        style={{ fontSize: '1rem', padding: '0.5rem' }}
      />
      <button
        onClick={handleSubmit}
        style={{ marginLeft: '1rem', padding: '0.5rem 1rem', fontSize: '1rem' }}
      >
        Розрахувати
      </button>
    </div>
  );
}

export default Home;
