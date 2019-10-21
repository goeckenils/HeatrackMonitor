import React, { Component } from 'react';
import Headerbar from '../interface/Headerbar';
import styled from 'styled-components/macro';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class TempGraph extends Component {
	render() {
		const data = [
			{
				name: '13:00',
				tempC: 24.03,
				amt: 2400
			},
			{
				name: '14:00',
				tempC: 25.05,
				amt: 2210
			},
			{
				name: '15:00',
				tempC: 23.04,
				amt: 2290
			},
			{
				name: '16:00',
				tempC: 26.63,
				amt: 2000
			},
			{
				name: '17:00',
				tempC: 28.61,
				amt: 2181
			},
			{
				name: '18:00',
				tempC: 25.97,
				amt: 2500
			},
			{
				name: '19:00',
				tempC: 22.22,
				amt: 2100
			},
			{
				name: '20:00',
				tempC: 32.22,
				amt: 2100
			},
			{
				name: '21:00',
				tempC: 29.22,
				amt: 2100
			},
			{
				name: '22:00',
				tempC: 34.22,
				amt: 2100
			},
			{
				name: '23:00',
				tempC: 21.22,
				amt: 2100
			},
			{
				name: '24:00',
				tempC: 15.22,
				amt: 2100
			}
		];
		return (
			<div>
				<Headerbar />
				<FlexWrapper>
					<TopWrapper>
						<StatusWrapper>
							<Status>
								<Title>Temperature</Title>
								<Text>monitoring from headracks</Text>
								<Text>last temp that was measured</Text>
							</Status>
						</StatusWrapper>
						<StatusWrapper>
							<LEDStatus>
								<Title>Ok</Title>
								<Text>24.02 °C</Text>
							</LEDStatus>
						</StatusWrapper>
					</TopWrapper>
					<Container>
						<LineChart
							width={900}
							height={300}
							data={data}
							margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Line type="monotone" dataKey="pv" stroke="#E84855" />
							<Line type="monotone" dataKey="tempC" fillOpacity={1} stroke="#5764ff" fill="#5764ff" />
							{/* <Line type="monotone" dataKey="tempC" fillOpacity={1} stroke="#EFB911" fill="#EFB911" /> */}
						</LineChart>
					</Container>
				</FlexWrapper>
			</div>
		);
	}
}

export default TempGraph;

export const Container = styled.div`
	height: 400px;
	/* background: #fff; */
	display: flex;
	justify-content: center;
	/* -webkit-box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
	-moz-box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
	box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15); */
	align-items: center;
`;
const FlexWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-size: 26px;
	margin: 10px 0px;
	color: rgb(102, 102, 102);
`;
export const Text = styled.h1`
	font-size: 18px;
	color: rgb(102, 102, 102, 0.8);
`;

export const Status = styled.div`
	width: 400px;
	padding: 20px;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border: 1px solid lightgray;
	border-radius: 1px;
`;
export const LEDStatus = styled.div`
	width: 400px;
	height: 200px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid #56e39f;
	border-radius: 1px;
`;

export const StatusWrapper = styled.div`
	padding-top: 60px;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 20px;
`;
export const Circle = styled.div`
	width: 120px;
	height: 120px;
	border-radius: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const TopWrapper = styled.div`display: flex;`;
