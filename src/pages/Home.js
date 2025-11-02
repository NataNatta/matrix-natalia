import React, { useState, useEffect } from 'react';

const energyDescriptions = {
  1: 'Аркана 1 — Сила волі, лідерство, прояв себе.',
  2: 'Аркана 2 — Інтуїція, жіноча енергія, глибина.',
  3: 'Аркана 3 — Творчість, самовираження, легкість.',
  4: 'Аркана 4 — Стабільність, структура, опора.',
  5: 'Аркана 5 — Мудрість, вчитель, духовний пошук.',
  6: 'Аркана 6 — Вибір, партнерство, любов.',
  7: 'Аркана 7 — Перемога, рух, розвиток.',
  8: 'Аркана 8 — Справедливість, баланс, карма.',
  9: 'Аркана 9 — Самопізнання, усамітнення, мудрість.',
 10: 'Аркана 10 — Потік, удача, зміни.',
 11: 'Аркана 11 — Сила духу, внутрішній контроль.',
 12: 'Аркана 12 — Жертва, трансформація, смирення.',
 13: 'Аркана 13 — Завершення, перехід, оновлення.',
 14: 'Аркана 14 — Гармонія, терпіння, алхімія.',
 15: 'Аркана 15 — Пристрасть, спокуса, матеріальність.',
 16: 'Аркана 16 — Руйнування і пробудження.',
 17: 'Аркана 17 — Надія, натхнення, зірка душі.',
 18: 'Аркана 18 — Ілюзії, підсвідомість, страхи.',
 19: 'Аркана 19 — Радість, сонце, відкритість.',
 20: 'Аркана 20 — Пробудження, поклик душі, місія.',
 21: 'Аркана 21 — Завершення циклу, цілісність.',
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

  const normalizeEnergy = (num) => {
    while (num > 22) {
      num = num.toString().split('').reduce((a, b) => a + Number(b), 0);
    }
    return num;
  };

  const calculateEnergies = (dateStr) => {
    const [day, month, year] = dateStr.split('-').map(Number);
    const energies = [];

    energies.push(normalizeEnergy(day));
    energies.push(normalizeEnergy(month));
    energies.push(normalizeEnergy(year));
    energies.push(normalizeEnergy(day + month + year));

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
