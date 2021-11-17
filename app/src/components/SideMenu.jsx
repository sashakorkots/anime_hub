import { Menu } from 'antd';
import { useState } from 'react';

const SideMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState('1')

  return (
    <>
      <Menu
        theme={'dark'}
        onClick={(e) => setSelectedMenu(e.key)}
        style={{ width: 'auto', margin: 10}}        
        selectedKeys={[selectedMenu]}
        mode="inline"
      >        
          <Menu.Item key="1">Manga</Menu.Item>
          <Menu.Item key="2">Help</Menu.Item>
      </Menu>
    </>
  )
}

export default SideMenu