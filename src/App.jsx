import { useState } from "react";
import Bar from "./charts/bar";

export default function App() {
	const [options, setOptions] = useState({})

	const data = [
		{
			name: 'john',
			age: 20,
			gender: 'male',
			value: 100
		},
		{
			name: 'jane',
			age: 21,
			gender: 'female',
			value: 120
		}
	]

	function allowDrop(e) {
		e.preventDefault()
	}

	function drop(e) {
		e.preventDefault()

		setOptions({
			...options,
			[e.target.getAttribute('name')]: {
				xAxis: {
					type: 'category',
					data: data.map((val) => val.name)
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						data: data.map((val) => val.value),
						type: e.target.getAttribute('name')
					}
				]
			}
		})
	}

	return (
		<div>
			<table draggable={true}>
				<thead>
					<tr>
						{Object.keys(data[0]).map(function (val, index) {
							return (
								<th key={index} style={{ width: `100px`, background: `lightblue`, textAlign: `center` }}>{val}</th>
							)
						})}
					</tr>
				</thead>
				<tbody>
					{data.map(function (val, index) {
						return (
							<tr key={index}>
								<td style={{ width: `100px`, background: `lightblue`, textAlign: `center` }}>{val.name}</td>
								<td style={{ width: `100px`, background: `lightblue`, textAlign: `center` }}>{val.age}</td>
								<td style={{ width: `100px`, background: `lightblue`, textAlign: `center` }}>{val.gender}</td>
								<td style={{ width: `100px`, background: `lightblue`, textAlign: `center` }}>{val.value}</td>
							</tr>
						)
					})}
				</tbody>
			</table>

			<div
				style={{ border: '1px solid black', width: '500px', minHeight: '100px' }}
				name="line"
				onDragOver={(e) => allowDrop(e)}
				onDrop={(e) => drop(e)}
			>
				<Bar option={options.line} />
			</div>
			<div
				style={{ border: '1px solid black', width: '500px', minHeight: '100px' }}
				name="bar"
				onDragOver={(e) => allowDrop(e)}
				onDrop={(e) => drop(e)}
			>
				<Bar option={options.bar} />
			</div>

		</div>
	)
}