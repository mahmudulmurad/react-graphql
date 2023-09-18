import "./App.css";
import { Layout, Typography } from "antd";
import { Products } from "./Products";
import { ApolloContextProvider } from "./apolloClient";
const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <ApolloContextProvider>
      <div className="App">
        <Layout style={{ height: "100vh" }}>
          <Header style={{ display: "flex", alignItems: "center" }}>
            <Title style={{ color: "white", margin: 0, textAlign: "left" }}>
              Inventory App
            </Title>
          </Header>
          <Content style={{ padding: "1em" }}>
            <Products />
          </Content>
        </Layout>
      </div>
    </ApolloContextProvider>
  );
}

export default App;
