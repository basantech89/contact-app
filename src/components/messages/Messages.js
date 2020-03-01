import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import { fetchSms } from "../../utils/apiCaller";

const Messages = () => {
	const [messages, dispatch] = useState([]);
	useEffect(() => {
		fetchSms()
			.then(messages => dispatch(messages))
			.catch(error => console.log(error));
	}, []);

	const showMessages = messages
		.sort((a, b) => new Date(b.time) - new Date(a.time))
		.map((message, index) => (
			<tr key={index}>
				<td> {message.name} </td>
				<td> {message.from} </td>
				<td> {message.to} </td>
				<td> {new Date(message.time).toLocaleString()} </td>
				<td> {message.text.substr(-6)} </td>
			</tr>
		));

	return (
		<Table responsive>
			<thead>
			<tr>
				<th> Name </th>
				<th> From </th>
				<th> To </th>
				<th> Time </th>
				<th> OTP </th>
			</tr>
			</thead>
			<tbody>
				{showMessages}
			</tbody>
		</Table>
	);
};

export default Messages;
