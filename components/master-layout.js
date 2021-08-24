import React from 'react';
import HeaderComponent from './partials/header.js';
import FooterComponent from './partials/footer.js';
import BreadcrumComponent from './partials/breadcrumb.js';
import { Layout } from 'antd';

const { Content } = Layout;

const MasterLayout = (props) => {
    return (
        <Layout className="layout">
            <HeaderComponent/>
            <Content style={{ padding: '0 50px' }}>
                <BreadcrumComponent
                    lv1={props.lv1}
                    lv2={props.lv2}
                    lv3={props.lv3}
                />
                <div className="site-layout-content">{props.children}</div>
            </Content>
            <FooterComponent/>
        </Layout>
    )
}
export default React.memo(MasterLayout);