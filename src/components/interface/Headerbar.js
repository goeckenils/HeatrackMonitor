import React, { Component } from 'react';
import styled from 'styled-components/macro';

class Headerbar extends Component {
	render() {
		return (
			<div>
				<Header>
					<Container>
						<H1>TempHUB</H1>
					</Container>
				</Header>
			</div>
		);
	}
}

export default Headerbar;

export const Header = styled.div`
	width: 100%;
	height: 60px;
	background: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 4px rgba(0, 0, 0, .25);
`;

export const Container = styled.div`
	width: 1100px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const H1 = styled.h1`
	font-size: 24px;
	color: #666;
`;
