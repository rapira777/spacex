import React,{useState,useEffect} from 'react';
import Main from '../Main/Main';
import './details.css';
import {useHistory} from 'react-router-dom';
import useLaunches from '../hook/hook'
import Youtube from 'react-youtube';

const Details = (props) =>{

	const [launch, setLaunch] = useState(null);

	const {getLaunch} = useLaunches();

	useEffect (()=>{

		setLaunch (getLaunch(props.match.params.id));

	},[getLaunch])
	//console.log(props.match.params.id);
	const history = useHistory();
	if (!launch) return <div>D o w n l o a d  . . . . . . . .</div> ;
	return (
		<>
		<Main name={launch.name}/>
		<main className="details">
			<div className="container">
				<div className="details-row">
					<div className="details-image">
						<img src={launch.links.patch.small} alt={launch.name}/>
					</div>
					<div className="details-content">
						<p className="details-description">{launch.details}</p>
					</div>
				</div>
				<Youtube className="details-youtube" videoId={launch.links.youtube_id}/>
			</div>
			<a onClick ={history.goBack} className="button button-back">Назад</a>
		</main>
	</>
	)

};

export default Details;