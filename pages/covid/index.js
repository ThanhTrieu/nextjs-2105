import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import { requestData } from '../../src/covid/action';
import GlobalVirus from '../../components/covid/Global';
import CountriesVirus from '../../components/covid/Countries';
import { wrapper } from '../../src/store';

export default function Covid() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestData());
    }, [dispatch]);
    
    return (
        <>
            <Row>
                <Col span={20} offset={2}>
                    <h1 style={{textAlign: 'center'}}> Thong tin dich Covid</h1>
                    <GlobalVirus/>
                    <CountriesVirus/>
                </Col>
            </Row>
        </>
    )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(requestData())
})