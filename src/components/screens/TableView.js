import React, { Component } from 'react';

import Headerbar from '../interface/Headerbar';
import styled from 'styled-components';
import Table from '../interface/Table';
class TableView extends Component {
	render() {
		return (
			<div>
				<Headerbar />
				<TableWrapper>
					<Table />
				</TableWrapper>
			</div>
		);
	}
}

export default TableView;

export const TableWrapper = styled.div`
	padding-left: 100px;
	padding-right: 30px;
	padding-top: 30px;
	padding-bottom: 30px;
`;
