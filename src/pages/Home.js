import React, { useState, useEffect } from 'react';

const energyDescriptions = {
  1: 'Аркана 1 — Сила волі, лідерство, прояв себе.',
  2: 'Аркана 2 — Інтуїція, жіноча енергія, глибина.',
  3: 'Аркана 3 — Творчість, самовираження, легкість.',
  // ... додай всі 22 аркани
  22: 'Аркана 22 — Дитяча довіра, спонтанність, шлях душі.'
};

function Home() {
  const [birthDate, setBirthDate] = useState('');
  const [energies, setEnergies] = useState([]);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    if (birthDate) {
      const ddmmyyyy = formatToDDMMYYYY(birthDate);
      setFormattedDate(ddmmyyyy);
      const calculated = calculateEnergies(ddmmyyyy);
      setEnergies(calculated);
    } else {
      setEnergies([]);
      setFormattedDate('');
    }
  }, [birthDate]);

  const formatToDDMMYYYY = (isoDate) => {
    const [year, month, day] = isoDate.split('-');
    return `${day}-${month}-${year}`;
  };

  const calculateEnergies = (dateStr) => {
    const digits = dateStr.replaceAll('-', '').split('').map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    const energies = [];

    energies.push(sum % 22 || 22);
    energies.push((sum + digits[0]) % 22 || 22);
    energies.push((sum + digits[1]) % 22 || 22);

    return energies;
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Калькулятор матриці долі</h1>
      <p>Введи дату народження, і ми одразу покажемо твої енергії з короткими розшифровками.</p>

      <div style={{ marginTop: '2rem' }}>
        <label htmlFor="birthDate" style={{ fontSize: '1rem', marginRight: '1rem' }}>
          Дата народження:
        </label>
        <input
          id="birthDate"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          style={{ fontSize: '1rem', padding: '0.5rem' }}
        />
      </div>

      {formattedDate && (
        <p style={{ marginTop: '1rem' }}>
          Обрана дата: <strong>{formattedDate}</strong>
        </p>
      )}

      {energies.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Твої енергії:</h2>
          <ul>
            {energies.map((num, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                <strong>{num}</strong>: {energyDescriptions[num] || 'Опис ще не додано'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
