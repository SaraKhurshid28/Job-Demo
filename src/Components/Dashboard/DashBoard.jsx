import { useState } from "react";
import "./Dashboard.css";
import { Images } from "../../Assests/Constant";
import Menubar from "../Menubar";
import Cards from "../Cards";
import Sidebar from "../Sidebar";
import { Button } from "antd";
import DashboardAreaChat from "./DashboardAreaChat";
import LineBarChart from "./LineBarChart";
import DashboardTable from "./DashBoardTable";
import DashboardProgressTable from "./DashboardProgressTable";

const Dashboard = () => {
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
        <div className="dbChartContainer">
          <div className="dbAreaChat">
            <p className="dbAreaChatHeading"> Sales overview</p>
            <p className="dbAreaChatSubHeading">
              (+5) more <span className="dbAreaChatSubText">in 2021</span>
            </p>
            <DashboardAreaChat />
          </div>
          <div className="dbLineChart">
            <p className="dbLineChartHeading"> Performace</p>
            <p className="dbLineChatSubHeading">Total orders</p>
            <LineBarChart />
          </div>
        </div>

        <div className="dbChartContainer">
          <div className="dbTableContainer">
            <div className="dbTableHeadingContainer">
              <p className="dbTableHeading">Page visits</p>
              <Button className="dbSeeMoreButton">See More</Button>
            </div>
            <DashboardTable />
          </div>
          <div className="dbLineChart">
            <div className="dbTableHeadingContainer">
              <p className="dbTableHeading">Social traffic</p>
              <Button className="dbSeeMoreButton">See More</Button>
            </div>
            <DashboardProgressTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
