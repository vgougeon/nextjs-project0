import React from 'react';
import Header from './header';
import BodyImage from './bodyImage';
const Layout = (props) => {
    return ( 
        <> 
        <Header />
        <BodyImage img={"https://images.igdb.com/igdb/image/upload/t_original/p0vvbghbz83y5dtuqw9w.jpg"} />
        </>
    );
}
 
export default Layout;