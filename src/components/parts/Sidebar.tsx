import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ProSidebar>
        <h1>The Top Cars</h1>
        <Menu iconShape="square">
          <MenuItem>
            <a href="astonmartin">Aston Martin</a>
          </MenuItem>
          <MenuItem>
            <a href="bentley">Bentley</a>
          </MenuItem>
          <MenuItem>
            <a href="bugatti">Bugatti</a>
          </MenuItem>
          <MenuItem>
            <a href="ferrari">Ferrari</a>
          </MenuItem>
          <MenuItem>
            <a href="lamborghini">Lamborghini</a>
          </MenuItem>
          <MenuItem>
            <a href="lotuscars">Lotus Cars</a>
          </MenuItem>
          <MenuItem>
            <a href="maserati">Maserati</a>
          </MenuItem>
          <MenuItem>
            <a href="mercedesbenz">Mercedes Benz</a>
          </MenuItem>
          <MenuItem>
            <a href="porsche">Porsche</a>
          </MenuItem>
          <MenuItem>
            <a href="rollsroyce">Rolls-Royce</a>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};
export default Sidebar;
