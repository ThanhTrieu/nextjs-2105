import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getLoadingVirus, getGolbalVirus } from '../../src/reselects/covid-reselect';
import { Row, Col, Card, Skeleton } from 'antd';

const GlobalVirus = () => {
    const { loading, global } = useSelector(createStructuredSelector({
        loading: getLoadingVirus,
        global: getGolbalVirus
    }));

    if(loading){
        return (
            <Row>
                <Col span={24}>
                    <Skeleton active />
                </Col>
            </Row>
        )
    }
    if(global === null){
        return (
            <Row>
                <Col span={24}>
                    <h4> khong co du lieu</h4>
                </Col>
            </Row>
        )
    }
    return (
        <>
            <Row>
                <Col span={8}>
                    <Card title="Nhiem benh" bordered={true}>
                        <p>- Moi nhiem benh: {global.NewConfirmed} </p>
                        <p>- Tong ca nhiem: {global.TotalConfirmed}</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Tu vong" bordered={true}>
                        <p>- Moi tu vong: {global.NewDeaths}</p>
                        <p>- Tong ca tu vong: {global.TotalDeaths}</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Khoi benh" bordered={true}>
                        <p>- Moi khoi benh: {global.NewRecovered}</p>
                        <p>- Tong ca khoi benh: {global.TotalRecovered}</p>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default React.memo(GlobalVirus);