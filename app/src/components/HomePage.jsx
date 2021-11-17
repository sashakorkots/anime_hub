import { Layout, Image } from 'antd';
import SideMenu from './SideMenu';
import { Typography } from 'antd';
import logo from '../logo.jpg';
import styles from './HomePage.module.css'

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;


const HomePage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className={styles.header}>
        <Layout ori>
          <Image height={50} src={logo} />
          <Title level={5}
            style={{ color: 'white' }}
          >
            Manga Hub
          </Title>
        </Layout>
      </Header>
      <Layout>
        <Sider>
          <SideMenu />
        </Sider>
        <Layout>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default HomePage