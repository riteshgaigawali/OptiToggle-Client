import React, { useEffect, useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { getCurrentUser, isLoggedIn, doLogout } from "../auth";
import { IoHome } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { RiLoginCircleFill } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import { BsToggle2On } from "react-icons/bs";

function CustomNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUser());
  }, [login]);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="" className="px-5">
        <NavbarBrand tag={ReactLink} to="/">
          <BsToggle2On size={50} />
          ptiToggle
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto mx-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                <IoHome size={20} /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/documentation">
                <IoDocumentText size={20} />
                Documentation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="https://github.com/riteshgaigawali/">
                <FaGithub size={20} />
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="">
                <IoMdPricetags size={20} /> Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="">
                <MdContactSupport size={20} /> Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar fill pills>
            {login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/user/admin-dashboard">
                    <MdDashboardCustomize size={20} /> Dashboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/user/profile-info">
                    {"Hello, " + user.firstName + " welcome!"}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logout}>
                    <RiLogoutCircleRFill size={20} />
                    Logout
                  </NavLink>
                </NavItem>
              </>
            )}
            {!login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/login">
                    <RiLoginCircleFill size={20} /> Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signup">
                    <SiGnuprivacyguard size={20} /> SignUp
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
