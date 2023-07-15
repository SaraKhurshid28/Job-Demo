import { useEffect, useState } from "react";
import "./Dashboard.css";
import { Images } from "../../Assests/Constant";
import Menubar from "../Menubar";
import Cards from "../Cards";
import Sidebar from "../Sidebar";
import { Button } from "antd";

const Dashboard = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(true);

  const cardsArray = [
    {
      mainHeading: "TODAY’S MONEY",
      cardImg: Images.wallet,
      amount: "$53,897",
      footerText: "+3.48% Since last month",
    },
    {
      mainHeading: "TODAY’S USERS",
      cardImg: Images.outline,
      amount: "3,200",
      footerText: "+5.20% Since last month",
    },
    {
      mainHeading: "NEW CLIENTS",
      cardImg: Images.sharp,
      amount: "+2,503",
      footerText: "-2.82% Since last month",
    },
    {
      mainHeading: "TOTAL SALES",
      cardImg: Images.cart,
      amount: "$173,000",
      footerText: "+8.12% Since last month",
    },
  ];
  const handleWindowResize = () => {
    if (window.innerWidth > 800) setIsOpen(true);
    else setIsOpen(false);

    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="dbMainContainer">
      <div>
        <Button
          className="dbSideBarMobContainer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={Images.darwer} width={20} height={20} alt="drawer icon" />
        </Button>
        <div>{isOpen ? <Sidebar /> : ""}</div>
      </div>

      <div className="dbBodyConatiner">
        <Menubar />
        <div className="dbBodyCardConatiner">
          {cardsArray.map((item) => {
            return (
              <div className="dbBodyCardConatinerWrap">
                <Cards
                  mainHeading={item.mainHeading}
                  cardImg={item.cardImg}
                  amount={item.amount}
                  footerText={item.footerText}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
