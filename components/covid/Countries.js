import React from 'react';
import {useSelector} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getLoadingVirus, getCountriesVirus } from '../../src/reselects/covid-reselect';
import {Row, Col, Table, Skeleton} from 'antd';

const columns = [
  {
    title: 'Quoc gia',
    dataIndex: 'Country',
    key: 'Country',
  },
  {
    title: 'Ma QG',
    dataIndex: 'CountryCode',
    key: 'CountryCode',
  },
  {
    title: 'Moi nhiem',
    dataIndex: 'NewConfirmed',
    key: 'NewConfirmed',
  },
  {
    title: 'Tong ca nhiem',
    dataIndex: 'TotalConfirmed',
    key: 'TotalConfirmed',
  },
  {
    title: 'Tu vong',
    dataIndex: 'NewDeaths',
    key: 'NewDeaths',
  },
  {
    title: 'Tong ca tu vong',
    dataIndex: 'TotalDeaths',
    key: 'TotalDeaths',
  },
  {
    title: 'Khoi benh',
    dataIndex: 'NewRecovered',
    key: 'NewRecovered',
  },
  {
    title: 'Tong khoi benh',
    dataIndex: 'TotalRecovered',
    key: 'TotalRecovered',
  }
];

const CountriesVirus = () => {
    const { loading, countries} = useSelector(createStructuredSelector({
        loading: getLoadingVirus,
        countries: getCountriesVirus
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
    if(countries === null){
        return (
            <Row>
                <Col span={24}>
                    <h4> khong co du lieu</h4>
                </Col>
            </Row>
        )
    }
    return (
        <Row style={{marginTop: '30px'}}>
            <Col span={24}>
                <Table dataSource={countries} columns={columns} />
            </Col>
        </Row>
    )
}
export default React.memo(CountriesVirus);
