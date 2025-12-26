import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState("");
  const [todos, setToDos] = useState([]);

  // QO'SHISH FUNKSIYASI
  const qoshish = () => {
    if (text === "") return;
    
    // Yangi massiv yaratib, unga eski todos va yangi textni qo'shamiz
    const yangiMassiv = [...todos, text];
    setToDos(yangiMassiv);
    setText(""); 
  };

  // O'CHIRISH FUNKSIYASI (Osonroq variant)
  const handleDelete = (index) => {
    // 1. Eskisidan nusxa olamiz (Chunki Reactda eskisini to'g'ridan-to'g'ri o'zgartirib bo'lmaydi)
    const nusxa = [...todos];
    
    // 2. Nusxadan bitta elementni o'chirib tashlaymiz
    nusxa.splice(index, 1);
    
    // 3. O'zgargan nusxani asosiy ro'yxatga saqlaymiz
    setToDos(nusxa);
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={qoshish}>Qo'shish</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} 
            <button onClick={() => handleDelete(index)}>O'chirish</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;