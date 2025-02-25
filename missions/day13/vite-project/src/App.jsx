import { useState } from "react";


function CurrencyInput ({label, value, onChange}) {
    return (
        <>
            <label>{label}</label>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    )
}


function App() {
    const EXCHANGE_RATE = 1300;
    const [exchangeRate, setExchangeRate] = useState({
        krw: 0,
        usd: 0,
    });

    const handleKrwChange = (value) => {
        setExchangeRate({
            krw: value,
            usd: value ? (value / EXCHANGE_RATE).toFixed(2) : "",
        });
    };

    const handleUsdChange = (value) => {
        setExchangeRate({
            usd: value,
            krw: value ? (value * EXCHANGE_RATE).toFixed(0) : "",
        });
    };

    return (
        <div>
            <h1>환율 변환기</h1>
            <CurrencyInput label="krw:" value={exchangeRate.krw} onChange={handleKrwChange} />
            <CurrencyInput label="usd:" value={exchangeRate.usd} onChange={handleUsdChange} />
        </div>
    );
}

export default App;
