import React, { Component } from 'react';
import ReactTable from 'react-table';
import { createGlobalStyle } from 'styled-components';
import 'react-table/react-table.css';

class Table extends Component {
	render() {
		const data = [
			{
				ip: '435465765',
				time: '2019-11-14 09:44:35',
				tempC: 26.34
			},
			{
				ip: '435465765',
				time: '2019-11-14 09:44:35',
				tempC: 26.34
			},
			{
				ip: '435465765',
				time: '2019-11-14 09:44:35',
				tempC: 26.34
			},
			{
				ip: '435465765',
				time: '2019-11-14 09:44:35',
				tempC: 26.34
			},
			{
				ip: '435465765',
				time: '2019-11-14 09:44:35',
				tempC: 26.34
			}
		];

		const columns = [
			{
				Header: 'Ip',
				accessor: 'ip'
			},
			{
				Header: 'Temp',
				accessor: 'tempC'
			},
			{
				Header: 'Time',
				accessor: 'time'
			}
		];

		return <ReactTable data={data} columns={columns} defaultPageSize={10} />;
	}
}

export default Table;

export const GlobalReactTableStyle = createGlobalStyle`
.ReactTable .rt-thead.-header {
    padding: 10px;
    text-align: left !important;
    box-shadow: none !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.ReactTable .rt-tbody .rt-td  {
    padding: 20px !important; 
}
.ReactTable .-pagination {
    box-shadow: none !important;
    border-top: 1px solid rgba(0, 0, 0, 0.06) !important;
}
.ReactTable * {
	color: rgb(102, 102, 102);
}`;
