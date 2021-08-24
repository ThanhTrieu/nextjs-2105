import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { Row, Col } from 'antd';
import ButtonApp from '../../components/Button';
import MasterLayout from '../../components/master-layout.js';
//import Image from 'next/image';

export default function DetailUser({ result }) {
    const router = useRouter();
    const params = router.query;
    const id = params.detail[1] || null;
    const name = params.detail[0] || null;
    const { data } = result;

    return (
        <MasterLayout
            lv1="Deail"
            lv2="App"
            lv3={name}
        >
            <Row>
                <Col span={18} offset={3}>
                    <h1>ID user: {id} </h1>
                    <p>First name: {data.first_name}</p>
                    <p>Last name: {data.last_name}</p>
                    <p>Email: {data.email}</p>
                    <p>
                        <img src={data.avatar} alt={data.first_name} />
                    </p>
                    <br/>
                    <Link href="/user/list">
                        <a> <ButtonApp type="primary"> list users </ButtonApp> </a>
                    </Link>
                </Col>
            </Row>
        </MasterLayout>
    )
}
export async function getServerSideProps({ query }) {
    const id = query.detail[1] || 0;
    const url = `https://reqres.in/api/users/${id}`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : {};
    return {
        props: { result }
    }
}