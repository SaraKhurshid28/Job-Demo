import { Images } from "../../Assests/Constant";
import { Input } from "antd";

import "./Menubar.css";
const Menubar = () => {
  return (
    <>
      <div className="menuMain">
        <div className="">
          <h6 className="menuTextHeading">Pages / Dashboard</h6>
          <h6 className="menuTextSubHeading">Dashboard</h6>
        </div>

        <div className="menuButtonContainer">
          <div className="menuSearchFilter">
            <Input
              addonBefore={<img src={Images.search} alt="search icon" />}
              placeholder="Type here..."
              style={{
                backgroundColor: "#FFF",
              }}
            />
          </div>
          <div className="rowFlex">
            <img src={Images.person} alt="person icon" />
            <p className="menuSignInStyle">SignIn</p>
          </div>
          <img src={Images.sharp} className="menuImage" alt="sharp icon" />
          <img src={Images.Bell} alt="bell icon" />
        </div>
      </div>
    </>
  );
};

export default Menubar;
