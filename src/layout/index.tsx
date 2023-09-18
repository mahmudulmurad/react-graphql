import { Layout, Typography } from "antd";
import { TAppLayoutProps } from "./decorator";
const { Header, Content } = Layout;
const { Title } = Typography;

function AppLayout({ children }: TAppLayoutProps) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Title style={{ color: "white", margin: 0, textAlign: "left" }}>
          Inventory App
        </Title>
      </Header>
      <Content style={{ padding: "1em", textAlign: "center" }}>
        {children}
      </Content>
    </Layout>
  );
}

export default AppLayout;
