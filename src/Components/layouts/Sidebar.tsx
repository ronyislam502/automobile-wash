import { Layout, Menu } from "antd";
import SideBarRoutesGenerator from "../../Utils/SideBarRoutesGenerator";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = () => {
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = SideBarRoutesGenerator({});
      break;
    case userRole.USER:
      sidebarItems = SideBarRoutesGenerator({});
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
