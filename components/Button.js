import React from 'react';
import { Button } from 'antd';

const ButtonApp = (props) => {
    return (
        <Button type={props.type}>{props.children}</Button>
    )
}
export default React.memo(ButtonApp);