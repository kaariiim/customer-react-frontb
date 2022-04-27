import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <>
      <ProSidebar>
        <h1>The Top Cars</h1>
        <Menu iconShape="square">
          <SubMenu title="Users">
            <MenuItem>User</MenuItem>
            <MenuItem>Customer</MenuItem>
          </SubMenu>
          <SubMenu title="All models">
            <MenuItem>Porsche</MenuItem>
            <MenuItem>Mercedes Benz</MenuItem>
            <MenuItem>Lotus Cars</MenuItem>
            <MenuItem>Maserati</MenuItem>
            <MenuItem>Aston Martin</MenuItem>
            <MenuItem>Bentley</MenuItem>
            <MenuItem>Bugatti</MenuItem>
            <MenuItem>Ferrari</MenuItem>
            <MenuItem>Lamborghini</MenuItem>
            <MenuItem>Rolls-Royce</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
      ;
    </>
  );
};
export default Sidebar;
