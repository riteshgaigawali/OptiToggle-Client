import React, { useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { FaUsersGear } from "react-icons/fa6";
import { GiToggles } from "react-icons/gi";
import { AiFillEnvironment } from "react-icons/ai";
import { IoAnalyticsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="" className="px-5">
        <NavbarBrand href="/user/admin-dashboard">
          <MdAdminPanelSettings size={50} /> Dashboard
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto mx-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/user/user-management">
                <FaUsersGear size={25} /> Users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/user/toggle-management">
                <GiToggles size={25} />
                Toggles
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <AiFillEnvironment size={25} />
                Environments
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Production</DropdownItem>
                <DropdownItem>Development</DropdownItem>
                <DropdownItem>Testing</DropdownItem>
                <DropdownItem>Staging</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink tag={ReactLink} to="/user/analytics">
                <IoAnalyticsSharp size={25} />
                Analitics
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/user/profile-info">
                <CgProfile size={25} />
                Profile
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AdminNav;
