import { Row, Col, Input } from 'antd';

const { Search } = Input;

export default function SearchMovies() {
    return (
        <>
            <Row style={{margin: '20px 0px'}}>
                <Col span={12} offset={6}>
                    <Search placeholder="movie's name ..." enterButton="Search" size="large" loading={false} />
                </Col>
            </Row>
        </>
    )
}