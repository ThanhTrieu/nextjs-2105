import React from 'react';

import { Breadcrumb } from 'antd';

const BreadcrumbComponent = (props) => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>{props.lv1}</Breadcrumb.Item>
            <Breadcrumb.Item>{props.lv2}</Breadcrumb.Item>
            <Breadcrumb.Item>{props.lv3}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default React.memo(BreadcrumbComponent);