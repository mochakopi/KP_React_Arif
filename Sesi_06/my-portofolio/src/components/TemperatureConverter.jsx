import { useState } from 'react';

const TemperatureConverter = () => {
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState('');

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(((value - 32) * 5 / 9).toFixed(2));
  };

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(((value * 9 / 5) + 32).toFixed(2));
  };

  return (
    <div className="container">
      <h1 className="mt-5">Temperature Converter</h1>
      <p>Menu ini digunakan untuk mengkonversi suhu dari Fahrenheit ke Celsius dan sebaliknya.</p>
      <div className="mb-3">
        <label htmlFor="fahrenheit" className="form-label">Fahrenheit</label>
        <input type="number" className="form-control" id="fahrenheit" value={fahrenheit} onChange={handleFahrenheitChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="celsius" className="form-label">Celsius</label>
        <input type="number" className="form-control" id="celsius" value={celsius} onChange={handleCelsiusChange} />
      </div>
    </div>
  );
}

export default TemperatureConverter;



