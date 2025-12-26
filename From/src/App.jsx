import React, { useState } from 'react';

function App() {
  // Inputdagi matnni saqlash uchun state
  const [inputValue, setInputValue] = useState('');

  // Form yuborilganda ishlaydigan funksiya
  const handleSubmit = (event) => {
    event.preventDefault(); // Sahifa qayta yuklanishini oldini oladi
    console.log("Kiritilgan ma'lumot:", inputValue);
    
    // Inputni tozalash (ixtiyoriy)
    setInputValue('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ma'lumot yuborish</h2>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Biror narsa yozing..." 
          value={inputValue} // State bilan bog'lash
          onChange={(e) => setInputValue(e.target.value)} // Har bir harf yozilganda stateni yangilash
        />
        
        <button type="submit">Submit</button>
      </form>

      <p>Hozirgi yozilayotgan matn: {inputValue}</p>
    </div>
  );
}

export default App;