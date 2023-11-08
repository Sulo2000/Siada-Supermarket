import React, { useState } from "react";

export default function Payment() {
  const cardMonth = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const cardYear = [
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
  ];
  const [cvv, setCvv] = useState(Array(3).fill('#'));
  const [cardNum, setCardNum] = useState(Array(16).fill("#"));
  const [cardHolder, setCardHolder] = useState("Name Surname");
  const [mm, setMm] = useState("MM");
  const [yy, setYy] = useState("YY");
  const [cardRotate,setCardRotate] = useState(true)

  const numberChange = (e) => {
    if (e.target.value.length > 16) {
      e.target.value = e.target.value.slice(0, 16);
    } else if (e.target.value === "") {
      setCardNum(Array(16).fill("#"));
    } else {
      const inputCardNumber = e.target.value;
      const cleanedCardNumber = inputCardNumber.replace(/\D/g, "");
      const formattedCardNumber = cleanedCardNumber.slice(0, 16);

      const updatedCardNum = [
        ...formattedCardNumber.split(""),
        ...Array(16 - formattedCardNumber.length).fill("#"),
      ];

      setCardNum(updatedCardNum);
    }
  };
  function sanitizeInput(input) {
    const trimmedInput = input.trim();
    const cleanedInput = trimmedInput.replace(/\s+/g, ' ');  
    return setCardHolder(cleanedInput);
  }
  const cvvChange = (e) =>{
    
    if (e.target.value.length > 3) {
      e.target.value = e.target.value.slice(0, 3); 
    }
    else{
      const inputCardCvv = e.target.value;
      const cleanedCardCvv = inputCardCvv.replace(/\D/g, "");
      const formattedCardCvv = cleanedCardCvv.slice(0, 3);

      const updatedCardCvv = [
        ...formattedCardCvv.split(""),
        ...Array(3 - formattedCardCvv.length).fill("#"),
      ];
      setCvv(updatedCardCvv);
    }
  }

  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card" data-aos="zoom-out-right">
          <div className={cardRotate ? "card-front card-rotate-front card-rotate-back" : 'card-front'} >
            <div className="images">
              <img src="img/card/chip.png" alt="Card-Chip" />
              <img src="img/card/visa.png" alt="Card-Logo" />
            </div>
            <div className="card-number-field">
              {cardNum.map((digit, index) => (
                <p
                  key={index}
                  className={(index + 1) % 4 === 0 ? "card__active" : ""}
                >
                  {digit}
                </p>
              ))}
            </div>
            <div className="card-info">
              <div className="card-name-field">
                <p>Card Holder</p>
                <p id="nameField">{cardHolder}</p>
              </div>
              <div className="card-valid-field">
                <p>Expires</p>
                <div id="validField">
                  <p id="monthDate">{mm}</p>
                  <p>/</p>
                  <p id="yearDate">{yy}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={cardRotate ? "card-back" : 'card-back card-rotate-front card-rotate-back'}>
            <div className="authorization"></div>
            <div className="card-back-cvv">
              <p>CVV</p>
              <div className="cvv-background">
              {cvv.map((cvv, index) => (
                <p key={index}>{cvv}</p>
              ))}
              </div>
            </div>
            <img src="img/visa.png" alt="" />
          </div>
        </div>
        <div className="card-values-all">
          <p>Card Information</p>
          <div className="card-values" data-aos="zoom-out-left">
            <div className="card-num">
              <span>Card Number</span>
              <input
                type="number"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                pattern="[0-9]*"
                className="number-write"
                onInput={(e) => numberChange(e)}
                onClick={() => setCardRotate(true)}
              />
            </div>
            <div className="card-name">
              <span>Card Holder</span>
              <input
                type="text"
                placeholder={"Name Surname"}
                className="name-write"
                onChange={(e) => sanitizeInput(e.target.value)}
                onClick={() => setCardRotate(true)}
              />
            </div>
            <div className="card-valid">
              <div className="card-valid-span">
                <span>Date</span>
                <span>CVV</span>
              </div>
              <div className="card-data">
                <div className="data-select">
                  <select
                    name="Month"
                    id="monthSelect"
                    onChange={(e) => setMm(e.target.value)}
                    onClick={() => setCardRotate(true)}
                    defaultValue={'Month'}
                  >
                    <option value="Month" disabled >
                      Month
                    </option>
                    {cardMonth.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    name="Year"
                    id="yearSelect"
                    onChange={(e) => setYy(e.target.value)}
                    onClick={() => setCardRotate(true)}
                    defaultValue={'Year'}
                  >
                    <option value="Year" disabled>
                      Year
                    </option>
                    {cardYear.map((year) => (
                      <option key={year} value={year.slice(-2)}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="card-cvv">
                  <input
                    type="number"
                    maxLength="3"
                    placeholder="123"
                    className="cvv-write"
                    onClick={() => setCardRotate(false)}
                    onInput={(e) => cvvChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
