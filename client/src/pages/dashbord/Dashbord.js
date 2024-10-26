import React from 'react'
import { Header } from '../../components/Header/Header'
import { Table, Breadcrumb, Card, Col, Row, Button, Select } from 'antd';
import { jwtDecode } from 'jwt-decode';
import { Collapse, Space, Input } from 'antd';
import { PlusSquareOutlined, SolutionOutlined, TeamOutlined, WalletFilled, WalletOutlined } from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';




export const Dashbord = () => {



  const { Panel } = Collapse;

  const columns = [
    {
      title: 'Administration organisatrice :	',
      dataIndex: 'Administration organisatrice :	',
      filters: [
        {
          text: 'JELAH',
          value: 'JELAH',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
          children: [
            {
              text: 'Yellow',
              value: 'Yellow',
            },
            {
              text: 'Pink',
              value: 'Pink',
            },
          ],
        },
        {
          text: 'Category 2',
          value: 'Category 2',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: '20%',
    },
    {
      title: 'Grade	',
      dataIndex: 'Grade	',
      filters: [
        {
          text: 'JELAH',
          value: 'JELAH',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
          children: [
            {
              text: 'Yellow',
              value: 'Yellow',
            },
            {
              text: 'Pink',
              value: 'Pink',
            },
          ],
        },
        {
          text: 'Category 2',
          value: 'Category 2',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: '20%',
    },
    {
      title: 'Spécialités',
      dataIndex: 'Spécialités',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Date de publication',
      dataIndex: 'Date de publication',
      filters: [
        {
          text: 'Tanger',
          value: 'Tanger',
        },
        {
          text: 'Safi',
          value: 'Safi',
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: '20%',
    },
    {
      title: 'Type de recrutement	',
      dataIndex: 'Type de recrutement	',
      filters: [
        {
          text: 'Tanger',
          value: 'Tanger',
        },
        {
          text: 'Safi',
          value: 'Safi',
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: '20%',
    },
    {
      title: 'Nombre de postes		',
      dataIndex: 'Nombre de postes		',
      filters: [
        {
          text: 'Tanger',
          value: 'Tanger',
        },
        {
          text: 'Safi',
          value: 'Safi',
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: '20%',
    },


  ];

  const data = [
    {
      key: '1',
      Nom: 'JELAH',
      Prenom: 'JABRANE',
      Sexe: 'Male',
      age: 27,
      Email: 'jabranejelah@gmail.com',

    },
    {
      key: '2',
      Nom: 'John',
      Prenom: 'Doe',
      Sexe: 'Male',
      age: 32,
      Email: 'john.doe@example.com',

    },
    {
      key: '3',
      Nom: 'Jane',
      Prenom: 'Smith',
      Sexe: 'Female',
      age: 28,
      Email: 'jane.smith@example.com',

    },
  ];


  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  // type SearchProps = GetProps<typeof Input.Search>;

  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );

  const on_Change = (value) => {
    console.log(`selected ${value}`);
  };
  const on_Search = (value) => {
    console.log('search:', value);
  };


  const CollapseItems = [
    {
      key: '1',
      label: 'critères de recherche',
      children: (
        <div style={{ display : 'flex',  flexDirection  :"column" ,gap : '10px',justifyContent : 'center'}}>
          <div className='label'>
          <label style={{fontSize : '12px', fontWeight : '500'}}>Administration organisatrice
          </label>
          </div>
          <div className='selecte1'>
          <Select
          style={{width : '200px'}}
            showSearch
            placeholder="Select a person"
            optionFilterProp="label"
            onChange={on_Change}
            onSearch={on_Search}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },

            ]}
          />  

          </div>
          

        
        
        </div>
      ),
    },
    // Add more items here if needed
  ];

  const items = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{CollapseItems}</p>,
    },

  ];
  const App = () => {
    const onChange = (key) => {
      console.log(key);
    };
    return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
  };



  const onSearch = (value, _e, info) => console.log(info?.source, value);



  return (
    <>
      <Header />

      {/* <div style={{ display: "flex", justifyContent: 'center', flexDirection: "column" }} className='container'>
        <div style={{width : "90%", margin : 'auto', padding : '20px 20px 0px'}} className='breadcrumb'>
          <Breadcrumb
            separator=">"
            items={[
              {
                title: 'Home',
              },
              {
                title: 'Application Center',
                href: '',
              },
              {
                title: 'Application List',
                href: '',
              },

            ]}
          />
        </div>
        <div style={{ width: "90%", padding: "0px 20px", margin: "auto" }} className='recherche'>
          <h5 style={{ color: '#00684a' }}>Tableau de bord de gestion des utilisateurs</h5>
          <p></p>

        </div>

        <div style={{ width: "90%", padding: "0px 20px", margin: "auto" }} className="container">
          <Table
            columns={columns}
            dataSource={data}
            onChange={onChange}
            size="small" // Makes the table smaller
            pagination={{ pageSize: 5 }} // Optional: limits the number of rows per page
            style={{ fontSize: "12px" }} // Adjusts the text size
            rowClassName={() => "custom-row-style"} // Optional: Apply row-specific styling
          />
        </div>

      </div> */}


      <div style={{ width: '90%', margin: 'auto' }} className='container'>
        <div style={{ marginTop: '40px' }} className='cards'>
          <Row gutter={18}>
            <Col span={6}>
              <Card tyle={{ padding: '0px', display: 'flex' }} bordered={false}>
                <div >
                  <WalletOutlined />
                </div>
                <h5 style={{ marginLeft: "20px" }}>Total des emplois affichés</h5>
                <h5 style={{ marginLeft: "20px" }}>100</h5>

              </Card>
            </Col>

            <Col span={6}>
              <Card tyle={{ padding: '0px', display: 'flex' }} bordered={false}>
                <div >
                  <SolutionOutlined />
                </div>
                <h5 style={{ marginLeft: "20px" }}>Applications actives</h5>
                <h5 style={{ marginLeft: "20px" }}>100</h5>
              </Card>
            </Col>

            <Col style={{ padding: '0px' }} span={6}>
              <Card style={{ padding: '0px', display: 'flex' }} bordered={true}>
                <div >
                  <TeamOutlined />
                </div>
                <h5 style={{ marginLeft: "20px" }}>Nombre total de candidats</h5>
                <h5 style={{ marginLeft: "20px" }}>100</h5>
              </Card>
            </Col>

            <Col style={{ padding: '0px' }} span={6}>
              <Card style={{ padding: '0px', display: 'flex' }} bordered={true}>
                <div >
                  <TeamOutlined />
                </div>
                <h5 style={{ marginLeft: "20px" }}>Nombre total de candidats</h5>
                <h5 style={{ marginLeft: "20px" }}>100</h5>
              </Card>
            </Col>
          </Row>

        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }} className='ongoing-jobs'>
          <div className='left-side'>
            <h3>recrutement en cours</h3>
            <p style={{ fontSize: '12px', paddingTop: "0px" }}>ce sont tous des travaux en cours pour ce mois</p>
          </div>
          <div style={{ display: 'flex', alignSelf: 'center', gap: '20px' }} className='right-side'>

            <Space direction="vertical">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                  width: 200,
                }}
              />

            </Space>
            <Button style={{ fontSize: '12px', fontWeight: '500' }} color="default" variant="solid">
              créer en continu
              <span><PlusSquareOutlined /></span>
            </Button>

          </div>

        </div>

        <div className='Listing-ongoing-jobs'>
          <div className='recherche'>
            <Collapse defaultActiveKey={['1']}>
              {CollapseItems.map((item) => (
                <Panel header={item.label} key={item.key}>
                  {item.children}
                </Panel>
              ))}
            </Collapse>
          </div>
          <div className='list-left-side'>
            <Table
              columns={columns}
              dataSource={data}
              onChange={onChange}
              showSorterTooltip={{
                target: 'sorter-icon',
              }}
            />


          </div>
          <div className='jobDetail-right-side'></div>
        </div>
      </div>




    </>
  )
}
