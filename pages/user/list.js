import axios from 'axios';
import Link from 'next/link';
//import Image from 'next/image';
import MasterLayout from '../../components/master-layout.js';

// http://localhost:3000/user/list
export default function ListUsers({ resutl }) {
    const { data } = resutl;

    return (
        <MasterLayout
            lv1="Home"
            lv2="List"
            lv3="App"
        >
            <h1>List user </h1>
            <table width="100%" border="1">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>First name</td>
                        <td>last name</td>
                        <td>Avatar</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>
                                <Link href={`/user/${item.first_name}/${item.id}`}>
                                    <a><img width="50%" height="50%" src={item.avatar} /></a>
                                </Link>
                            </td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </MasterLayout>
    )
}

// cal api
export async function getStaticProps() {
    const url = `https://reqres.in/api/users?page=1`;
    const response = await axios.get(url);
    const resutl = await response.status === 200 ? await response.data : {};

    return {
        props: { resutl } //// will be passed to the page component as props
    }
}