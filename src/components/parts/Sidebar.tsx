import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = () => {
  return (
    <>
      <ProSidebar>
        <h1>The Top Cars</h1>
        <Menu iconShape="square">
          <MenuItem>User</MenuItem>
          <MenuItem>Customer</MenuItem>
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
        </Menu>
      </ProSidebar>
    </>
  );
};
export default Sidebar;
