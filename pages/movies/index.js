import { useState } from 'react';
import { Row, Col, Input } from 'antd';
import { searchMovies } from '../../src/movies/action';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadingGetData, getDataMovies } from '../../src/reselects/movie-reselect';

const { Search } = Input;

export default function SearchMovies() {
    const { loading } = useSelector(createStructuredSelector({
        loading: loadingGetData
    }));
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const searchData = (key = '') => {
        dispatch(searchMovies(key, page));
    }

    return (
        <>
            <Row style={{margin: '20px 0px'}}>
                <Col span={12} offset={6}>
                    <Search
                        placeholder="movie's name ..."
                        enterButton="Search"
                        size="large"
                        loading={loading}
                        onSearch={val => searchData(val)}
                    />
                </Col>
            </Row>
        </>
    )
}