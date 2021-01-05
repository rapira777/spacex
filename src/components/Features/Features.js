import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper'
import Main from '../Main/Main';
//import rocket from '../../img/falcon-1.png';
import './features.css';

const rocketImage ={
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship'

}

const Features = ({name,height,diameter,mass,payload_weights:pLW,description}) => {
	//console.log(props);
	//const {name} = props;
	return (
		<>
		<Main rocket = {name}/>	
		<section className="features">
		<h2 className="features-title">
			{name} <br/>Описание
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Размеры
				</caption>
				<thead>
					<tr>
						<td className="table-column">Высота</td>
						<td className="table-column">{height.meters} м / {height.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">Диаметр</td>
						<td className="table-column">{diameter.meters} м / {diameter.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">Масса</td>
						<td className="table-column">{mass.kg} кг / {mass.lb} lb</td>
					</tr> 
					{pLW.map( (item) =>(
					<tr key = {item.id}>
						<td className="table-column">Полезная нагрузка до {item.id.toUpperCase()}</td>
						<td className="table-column">{item.kg} кг / {item.lb} lb</td>
					</tr>	
					 ) )}
					
				</thead>
			</table>
				<RellaxWrapper speed={14}>
					<img
						src={`img/${rocketImage[name]}.png`}
						alt="rocket"
						className="rocket"
						
					/>
				</RellaxWrapper>
			<article>
				<h3 className="features-subtitle">Коротко о главном</h3>
				<p className="features-text">
					{description}
				</p>
			</article>
		</div>
	</section>
	</>	

)};

export default Features;