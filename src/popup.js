import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button } from './components';
import Link from 'next/link';

const Popupsave=()=>{
return(
<div>
	<Popup trigger={ <button label="SAVE">SAVE</button>} 
	position="right center">
	<div>BE EEE SEM3 schedule was successfully created</div>
	<Link href="/"><a>Go Home</a></Link>
	<button>create New schedule </button>
	<button>allocate schedule</button>
	</Popup>
</div>
)
};
export default Popupsave