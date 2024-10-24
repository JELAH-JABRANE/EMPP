import React from 'react'
import { Header } from '../../components/Header/Header'
import { Table, Breadcrumb } from 'antd';
import { jwtDecode } from 'jwt-decode';
import { Collapse, Space } from 'antd';




export const Dashbord = () => {
  const columns = [
    {
      title: 'Nom',
      dataIndex: 'Nom',
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
      title: 'Prenom',
      dataIndex: 'Prenom',
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
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
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
      title: 'Email',
      dataIndex: 'Email',
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
      title: 'CNE',
      dataIndex: 'CNE',
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
      title: 'Sexe',
      dataIndex: 'Sexe',
      filters: [
        {
          text: 'Male',
          value: 'Tanger',
        },
        {
          text: 'Female',
          value: 'Safi',
        },
      ],
      onFilter: (value, record) => record.address.startsWith(value),
      filterSearch: true,
      width: '20%',
    },
    {
      title: 'Date de Naissance',
      dataIndex: 'Date de Naissance',
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
      width: '80%',
    },
    {
      title: 'Lieu de Naisseance',
      dataIndex: 'Lieu de Naisseance',
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
      width: '80%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
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
      title: 'code Postal',
      dataIndex: 'code Postal',
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
      title: 'Ville',
      dataIndex: 'Ville',
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
      title: 'Paye',
      dataIndex: 'Paye',
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
      title: 'Telephone',
      dataIndex: 'Telephone',
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
      CNE: 'HH62858',
      'Date de Naissance': '1997-09-03',
      'Lieu de Naisseance': 'Safi',
      address: '3 rue mamlaka qu hopital',
      'code Postal': '10000',
      Ville: 'Tanger',
      Paye: 'Morocco',
      Telephone: '066666666',
    },
    {
      key: '2',
      Nom: 'John',
      Prenom: 'Doe',
      Sexe: 'Male',
      age: 32,
      Email: 'john.doe@example.com',
      CNE: 'AB12345',
      'Date de Naissance': '1992-01-15',
      'Lieu de Naisseance': 'Casablanca',
      address: '12 Rue Liberty',
      'code Postal': '20000',
      Ville: 'Casablanca',
      Paye: 'Morocco',
      Telephone: '0655555555',
    },
    {
      key: '3',
      Nom: 'Jane',
      Prenom: 'Smith',
      Sexe: 'Female',
      age: 28,
      Email: 'jane.smith@example.com',
      CNE: 'XY98765',
      'Date de Naissance': '1996-03-22',
      'Lieu de Naisseance': 'Marrakech',
      address: '5 Boulevard Peace',
      'code Postal': '40000',
      Ville: 'Marrakech',
      Paye: 'Morocco',
      Telephone: '0677777777',
    },
  ];


  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <>
      <Header />

      <div style={{ display: "flex", justifyContent: 'center', flexDirection: "column" }} className='container'>
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

      </div>




    </>
  )
}
