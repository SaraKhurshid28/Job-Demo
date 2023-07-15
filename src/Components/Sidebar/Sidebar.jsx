import "./Sidebar.css";
import { Images } from "../../Assests/Constant";
import { Button } from "antd";
const Sidebar = () => {
  return (
    <>
      <div className="sideBarMainContainer">
        <div className="sideBarLogoDiv rowFlex">
          <div className="sideBarLogoLine"></div>
          <img src={Images.Logo} alt="logo" />
        </div>
        <hr className="sideBarLine" />

        <div className="sideBarDashIconContainer">
          <div className="sideBarHomeIcon">
            <img src={Images.HomeIcon} alt="home icon" />
          </div>
          <div className="sideBarText">Dashboard</div>
        </div>

        <div className="sideBarMenuContainer">
          <div className="sideBarMenuItem">
            <img src={Images.Bill} alt="bill icon" />
            <div className="sideBarMenuItemText">Billing</div>
          </div>

          <div className="sideBarMenuAccount">Account Pages</div>
          <div className="sideBarMenuItem">
            <img src={Images.Signin} alt="signin icon" />
            <div className="sideBarMenuItemText">Sign In</div>
          </div>
          <div className="sideBarMenuItem">
            <img src={Images.SignOut} alt="aignout" />
            <div className="sideBarMenuItemText">Sign Up</div>
          </div>
        </div>

        <div className="sideBarFootConatiner">
          <img src={Images.Envlop} alt="envlop" />
          <p className="sideBarNeedHelp">Need Help</p>
          <p className="sideBarSubText">Please check our docs</p>
          <div className="sideBarButtonContainer">
            <Button className="sideBarButton">DOCUMENTATION</Button>
            <Button className="sideBarButton sideBarDarkButton">
              UPGRADE TO PRO
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
