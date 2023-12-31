import { Layout, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TAppLayoutProps } from "./decorator";
import { UiButton } from "component/Button";
const { Header, Content } = Layout;
const { Title } = Typography;

const AppLayout = ({ children }: TAppLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname === "/create-product";

  const handleClick = () => {
    if (location.pathname === "/create-product") {
      navigate("/");
    } else {
      navigate("/create-product");
    }
  };

  return (
    <StyledLayout>
      <StyledHeader>
        <StyledTitle>Inventory App</StyledTitle>
        <UiButton
          type="primary"
          title={path ? "Product details" : "Create new product"}
          onClick={handleClick}
          htmlType="button"
        />
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
  );
};

export default AppLayout;

const StyledLayout = styled(Layout)`
  height: 100vh;
  width: 100%;
  position: fixed;
`;

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled(Title)`
  && {
    color: #fff;
  }
`;

const StyledContent = styled(Content)`
  padding: 1em;
  text-align: center;
  overflow: scroll;
`;
