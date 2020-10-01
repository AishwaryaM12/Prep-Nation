import React from 'react';
import PrepBuilder from './PrepBuilder';
import './prepfinal.css';
import Button from 'react-bootstrap/Button';

const prepfinal = () => (
    <div className="container">
    	<div className="pa5 welcome-color mb5">
    		<div className=" pl4 pr4 float-right">
    		<img src={require("./teaching.png")} width="500px" height="400px;"/>
    		</div>
    		<h1>Welcome to Prep-Nation</h1>
    		<br></br>
    		<p style={{width: '50%',fontSize: '18px'}}>
    		Prep-Nation is a Practice Venture started at IIIT Naya Raipur. It was established in 2020 and aims 
    		to help students and job seekers strengthen their skillset before appearing for a job or an internship
    		and be able to sail through the process. The initiative is focused on the post pandemic scenario where 
    		due to a lack of market base people would struggle to find suitable jobs, they can however put efforts to
    		upskill their abilities and stay relevant and competitive in the market. 
    		</p>
    		<p style={{width: '50%', fontSize: '18px'}}>At Prep-Nation you can prepare Aptitude, Language and programming abilities in a set of comprehensive materials offered at competitive 
			pricing. Tested and handcrafted by the best, the catalogue promises to provide you with the most rigorous 
			training.
			</p>
			<p style={{width: '50%', fontSize: '18px'}}> 
			Aptitude section, coding and english section
			check out our latest catalogues here
    		</p>
    		<Button variant="danger">About</Button>
    		
    	</div>
        <PrepBuilder />        
    </div>

)

export default prepfinal;