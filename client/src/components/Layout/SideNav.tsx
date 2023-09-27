import { Avatar } from "antd";
import { MenuOutlined, HomeOutlined } from "@ant-design/icons";
import listIcon from "../../assets/icons/list-icon.png";
import Button from "../Button/Button";

const SideNav = () => {
  return (
    <aside className="sticky top-0 left-0 h-screen bg-white w-max shadow-[0px_4px_23px_0px_rgba(0,0,0,0.05)] py-[50px] px-[12px]">
      <nav className="grid gap-[94px] h-full grid-rows-[max-content_max-content_auto] w-max">
        <Button className="pb-0">
          <MenuOutlined />
        </Button>

        <div className="grid gap-[46px]">
          <Button>
            {/* <img src="/home-icon.png" width={24} alt="Home" /> */}
            <HomeOutlined />
          </Button>

          <Button className="flex justify-center items-center">
            <img src={listIcon} className="" width={22} alt="List" />
            {/* <UnorderedListOutlined /> */}
          </Button>
        </div>

        <div className="grid gap-[24px] self-end  grid-rows-[max-content_max-content]">
          <Button>
            <Avatar
              size={47}
              style={{ backgroundColor: "#1D4ED8", color: "white" }}
            >
              NT
            </Avatar>
          </Button>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
