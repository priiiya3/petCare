import { useState, useEffect } from 'react';
import { Table } from 'antd';
import 'antd/dist/reset.css';



function App() {
  const [pets, setPets] = useState([]);
  async function fetchData() {
    const response = await fetch('http://localhost:5000/users');
    const data = await response.json();
    setPets(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className='heading'> Pets </h1>
      <Table dataSource={pets}>
        <Table.Column title="Name" dataIndex="name" key="name" />
        <Table.Column title="Type" dataIndex="type" key="type" />
        <Table.Column title="Breed" dataIndex="breed" key="breed" />
        <Table.Column title="Owner" dataIndex="owner" key="owner" />
        <Table.Column title="Age" dataIndex="age" key="age" />
        <Table.Column title="Vaccinated" dataIndex="vaccinated" key="vaccinated" />
      </Table>
    </div>

  );
}

export default App;
