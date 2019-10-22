import React, { Component } from 'react';
import { addTemp, addTemps } from "../../redux/actions"
import Headerbar from '../interface/Headerbar';
import styled, {keyframes} from 'styled-components/macro';
import axios from 'axios';
import { connect } from "react-redux"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import moment from 'moment';


const fetchData = (props) => {
    axios
        .get('http://localhost:8080/api/get')
		.then((res) => props.addMultiple(res.data))
}



class TempGraph extends Component {

	componentDidMount() {
        fetchData(this.props)
        this.interval = setInterval(() => {
            fetchData(this.props)
    }, 1000)
}

	render() {
        const getLastTemp = this.props.temps.find((item, i) => i === this.props.temps.length -1)|| {}
        const lastTemp = getLastTemp && getLastTemp.tempc && getLastTemp.tempc.toFixed(2)
        const getStatus = (lastTemp) => {
            if(lastTemp < 30) {
                return (
                   <Circle color="#56e39f">
                       	<Title>Ok</Title>
                        <Text>{`${lastTemp}`}°C</Text>
                   </Circle>
                )
            } else if(lastTemp < 45) {
                return (
                    <Circle color="#EFB911">
                       	<Title>Danger</Title>
                        <Text>{`${lastTemp}`}°C</Text>
                   </Circle>
                )
        } else if(lastTemp > 45) {
             return (
                    <Circle color="#E84855">
                       	<Title>Warning</Title>
                        <Text>{`${lastTemp}`}°C</Text>
                   </Circle>
                )
        }
        } 
		const formatLabel = (input) => {
            const label =  moment(input)
            return label.format('HH:mm')
		};
		return (
			<div>
				<Headerbar />
				<FlexWrapper>
					<TopWrapper>
						<StatusWrapper>
							<Status>
								<H1>Temperature</H1>
								<H2>monitoring from headracks</H2>
								<H2>last temp that was measured</H2>
							</Status>
						</StatusWrapper>
						<StatusWrapper>
							<LEDStatus>
								{getStatus(lastTemp)}
							</LEDStatus>
						</StatusWrapper>
					</TopWrapper>
					<Container>
						<LineChart
							width={900}
							height={300}
							data={this.props.temps}
							margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="date" tickFormatter={formatLabel} />
							<YAxis />
							<Tooltip />
							{/* <Line type="monotone" dataKey="pv" stroke="#E84855" /> */}
							<Line type="monotone" dataKey="tempc" fillOpacity={1} stroke="#5764ff" fill="#5764ff" />
							{/* <Line type="monotone" dataKey="tempC" fillOpacity={1} stroke="#EFB911" fill="#EFB911" /> */}
						</LineChart>
					</Container>
				</FlexWrapper>
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
export default connect(mapStateToProps, mapDispatchToProps)(TempGraph);

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
	//color: rgb(102, 102, 102);
`;
export const Text = styled.h1`
	font-size: 18px;
	//color: rgb(102, 102, 102, 0.8);
`;
export const H1 = styled.h1`
	font-size: 26px;
	margin: 10px 0px;
	color: rgb(102, 102, 102);
`;
export const H2 = styled.h1`
	font-size: 18px;
	color: rgb(102, 102, 102, 0.8);
`;

export const Status = styled.div`
	width: 400px;
	padding: 20px;
	height: 200px;
	display: flex;
	padding-left: 60px;
	flex-direction: column;
	justify-content: center;
	/* border: 1px solid lightgray; */
	border-radius: 1px;
`;
export const LEDStatus = styled.div`
	width: 400px;
	height: 200px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	border-radius: 1px;
`;

export const StatusWrapper = styled.div`
	padding-top: 60px;
	padding-left: 20px;
	padding-right: 20px;
	padding-bottom: 20px;
`;
const pulse = ({ color }) => keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 ${color}60;
    box-shadow: 0 0 0 0 ${color}60;
  }
  70% {
      -moz-box-shadow: 0 0 0 10px ${color}00;
      box-shadow: 0 0 0 20px ${color}00;
  }
  100% {
      -moz-box-shadow: 0 0 0 0 ${color}00;
      box-shadow: 0 0 0 0 ${color}00;
  }
`;
export const Circle = styled.div`
	width: 120px;
	height: 120px;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
    flex-direction: column;
    transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
    background: ${props => props.color}10;
    color: ${props => props.color};
    border: 1px solid ${props => props.color};
    animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const TopWrapper = styled.div`display: flex;`;