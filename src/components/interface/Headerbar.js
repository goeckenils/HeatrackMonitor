import React, { Component } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { ReactComponent as Dash } from '../icons/dash.svg';
import { ReactComponent as Table } from '../icons/table.svg';
import { ReactComponent as Warn } from '../icons/warn.svg';

class Headerbar extends Component {
	render() {
		return (
			<div>
				<Header>
					<Container>
						<DashIconWrapper dashactive={this.props.dashactive}>
							<Link to="/">
								<DashIcon  />
							</Link>
						</DashIconWrapper>
						<TableIconWrapper tableactive={this.props.tableactive}>
							<Link to="/table">
								<TableIcon />
							</Link>
						</TableIconWrapper>
						<IconWrapper>
							<WarnIcon />
						</IconWrapper>
					</Container>
				</Header>
			</div>
		);
	}
}

export default Headerbar;

export const Header = styled.div`
	background: #5764ff;
	z-index: 10;
	height: 100%;
	width: 70px;
	position: absolute;
	display: flex;
	position: fixed;
	top: 0;
	align-items: center;
	justify-content: center;
`;

export const Container = styled.div`
	height: 100%;
	display: flex;
	margin-top:20px;
	align-items: center;
	flex-direction: column;
	justify-content: start;
`;

export const H1 = styled.h1`
	font-size: 24px;
	color: #666;
	padding: 15px;
`;

const DashIcon = styled(Dash)`
width: 25px;
display: flex;
height: 25px;
fill: #fff;


`;
const TableIcon = styled(Table)`
width: 25px;
display: flex;
height: 25px;
fill: #fff;
/* border-bottom: ${(props) => (props.tablehactive ? css`#fff` : css`none`)}; */
`;
const WarnIcon = styled(Warn)`
width: 25px;
display: flex;
height: 25px;
fill: #fff;
/* border-bottom: ${(props) => (props.warnactive ? css`#fff` : css`none`)}; */
`;

const DashIconWrapper = styled.div`
	padding: 15px;
	&:hover {
		background: rgba(255, 255, 255, 0.1);
	} 
	justify-content: center;
	align-items: center;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	margin-top:10px;
	background:  ${(props) => (props.dashactive ? css`rgba(0, 0, 0, 0.1)` : css`none`)};

`;
const IconWrapper = styled.div`
	padding: 15px;
	&:hover {
		background: rgba(255, 255, 255, 0.1);
	} 
	justify-content: center;
	align-items: center;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	margin-top:10px;
	background:  ${(props) => (props.tableactive ? css`rgba(0, 0, 0, 0.1)` : css`none`)};
`;
const TableIconWrapper = styled.div`
	padding: 15px;
	&:hover {
		background: rgba(255, 255, 255, 0.1);
	} 
	justify-content: center;
	align-items: center;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	margin-top:10px;
	background:  ${(props) => (props.dashactive ? css`rgba(0, 0, 0, 0.1)` : css`none`)};
	background:  ${(props) => (props.tableactive ? css`rgba(0, 0, 0, 0.1)` : css`none`)};
`;
