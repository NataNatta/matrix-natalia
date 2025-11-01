import React, { useState } from 'react';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [energies, setEnergies] = useState([]);

  const energyDescriptions = {
    1: "1 — Воля. Сила волі, лідерство, ініціатива.",
    2: "2 — Інтуїція. Відчуття, глибина, жіноча енергія.",
    3: "3 — Творчість. Самовираження, краса, натхнення.",
    4: "4 — Практичність. Стабільність, структура, праця.",
    5: "5 — Свобода. Рух, зміни, пригоди.",
    6: "6 — Любов. Гармонія, сім’я, відповідальність.",
    7: "7 — Мудрість. Знання, аналітика, духовність.",
    8: "8 — Сила. Влада, контроль, впевненість.",
    9: "9 — Мудрість. Альтруїзм, завершення, гуманізм.",
    10: "10 — Удача. Колесо фортуни, зміни, доля.",
    11: "11 — Справедливість. Закон, баланс, чесність.",
    12: "12 — Жертва. Смирення, служіння, терпіння.",
    13: "13 — Трансформація. Зміни, оновлення, смерть-народження.",
    14: "14 — Помірність. Баланс, гармонія, терпіння.",
    15: "15 — Пристрасть. Спокуси, енергія, матеріальність.",
    16: "16 — Руйнування. Кризис, очищення, звільнення.",
    17: "17 — Надія. Натхнення, віра, мрії.",
    18: "18 — Ілюзії. Підсвідомість, страхи, сни.",
    19: "19 — Сонце. Радість, успіх, відкритість.",
    20: "20 — Пробудження. Карма, поклик, оновлення.",
    21: "21 — Світ. Завершення, цілісність, реалізація.",
    22: "22 — Дурень. Початок, легкість, свобода."
  };

  const calculateEnergies = () => {
    if (!birthdate) return;

    const digits = birthdate.replaceAll('-', '').split('').map(Number);
    const sum = digits.reduce((acc, val) => acc + val, 0);

    const baseEnergy = sum % 22 || 22;
    const secondEnergy = (sum + (digits[0] || 0)) % 22 || 22;

    setEnergies([baseEnergy, secondEnergy]);
  };

  let day = '', month = '', year = '';
  if (birthdate) {
    const parts = birthdate.split('-');
    if (parts.length === 3) {
      year = parts[0];
      month = parts[1];
      day = parts[2];
    }
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Калькулятор Матриці Долі</h2>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        style={{ fontSize: '1em', marginTop: '10px' }}
      />
      <br />
      <button onClick={calculateEnergies} style={{ fontSize: '1em', marginTop: '10px' }}>
        Показати енергії
      </button>

      {energies.length > 0 && (
        <div style={{ marginTop: '20px', fontSize: '1.1em' }}>
          <p><strong>Дата:</strong> {day}.{month}.{year}</p>
          <h3>Енергії:</h3>
          <ul>
            {energies.map((energy, index) => (
              <li key={index}>
                <strong>{energy}:</strong> {energyDescriptions[energy]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
