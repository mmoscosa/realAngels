import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
} from "./SidebarElements";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = ({ isOpen, toggle }) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        {!isAuthenticated && (
          <SidebarMenu>
            <SidebarLink
              to="about"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              About
            </SidebarLink>
            <SidebarLink
              to="discover"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Discover
            </SidebarLink>
            <SidebarLink
              to="services"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Services
            </SidebarLink>
            <SidebarLink
              to="signup"
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Sign Up
            </SidebarLink>
          </SidebarMenu>
        )}
        <SideBtnWrap>
          {isAuthenticated ? (
            <SidebarRoute
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log out
            </SidebarRoute>
          ) : (
            <SidebarRoute onClick={() => loginWithRedirect()}>
              Sign in
            </SidebarRoute>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
