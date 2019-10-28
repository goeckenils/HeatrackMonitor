import React, { Component } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux'
import axios from "axios";
import { addTemp, addTemps } from "../../redux/actions"
import { createGlobalStyle } from 'styled-components';
import 'react-table/react-table.css';

const fetchData = (props) => {
    axios
        .get('http://192.168.16.36:5000/temperature')
		.then((res) => props.addMultiple(res.data))
}

class Table extends Component {

	componentDidMount() {
	fetchData(this.props)
	}
	


	render() {

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
				accessor: 'date'
			},
			{
				Header: 'Mac Address',
				accessor: 'device.mac'
			}
		];

		return ( 
			<div>
				<ReactTable data={this.props.temps} columns={columns} defaultPageSize={10} />
		</div>
		);
	}
}
const mapStateToProps = (state) => {
    return {
        temps: state.temps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (temp) => dispatch(addTemp(temp)),
        addMultiple: (temps) => dispatch(addTemps(temps))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);

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
