import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  // useEffect : [] 일 때는 1회만 실행
  useEffect(() => {
    // coin API 불러오기 (fetch, then)
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {/* strong element는 해당 콘텐츠의 중요성이나 심각함, 긴급함 등을 강조할 때 사용합니다 */}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {/* API를 불러와 coins state에서 map을 통해 coin 하나씩 정보를 가져옴 */}
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
export default App;