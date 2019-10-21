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
						<IconWrapper>
							<Link to="/">
								<DashIcon dashactive={this.props.dashactive} />
							</Link>
						</IconWrapper>
						<IconWrapper>
							<Link to="/table">
								<TableIcon />
							</Link>
						</IconWrapper>
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
height: 25px;
fill: #fff;

/* border-left: 1px solid ${(props) => (props.dashactive ? css`#fff` : css`none`)}; */


`;
const TableIcon = styled(Table)`
width: 25px;
height: 25px;
fill: #fff;
/* border-bottom: ${(props) => (props.tablehactive ? css`#fff` : css`none`)}; */
`;
const WarnIcon = styled(Warn)`
width: 25px;
height: 25px;
fill: #fff;
/* border-bottom: ${(props) => (props.warnactive ? css`#fff` : css`none`)}; */
`;

const IconWrapper = styled.div`
	padding: 20px;
	&:hover {
		background: rgba(255, 255, 255, 0.1);
	}
	display: flex;
	justify-content: center;
	align-items: center;
`;
