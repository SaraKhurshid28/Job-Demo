import Card from "antd/es/card/Card";
import "./Cards.css";
import { useEffect, useState } from "react";
const Cards = (props) => {
  const [isPositive, setIsPositive] = useState(false);

  useEffect(() => {
    let check = props.footerText.includes("+");
    if (check) setIsPositive(true);
  }, []);
  return (
    <>
      <Card className="cardStyle">
        <div className="cardBodyContainer">
          <div>
            <h3 className="cardMainHead">{props.mainHeading}</h3>
            <p className="cardSubHeading">{props.amount}</p>
          </div>
          <div className="cardImgConatiner">
            <img src={props.cardImg} alt="Wallet" />
          </div>
        </div>

        <div className="cardFooterText">
          <span style={{ color: isPositive ? "green" : "red" }}>
            {" "}
            {`${props.footerText.split("%")[0]}`}%
          </span>
          <span className="cardFooterSubText">
            {" "}
            {props.footerText.split("%")[1]}
          </span>
        </div>
      </Card>
    </>
  );
};

export default Cards;
