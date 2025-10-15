import InteractiveNavModal from "./modal";
import InteractiveNavComponent from "./interactive";
import { useEffect, useState } from "react";

export interface dccType {
	id: string
	short_label: string
	homepage: string
	icon: string
	description?: string 
}

const CFDEWheel = () => {
	const [dccs, setDccs] = useState<Array<dccType>>([])
	useEffect(()=>{
		const fetch_dccs = async () => {
			const r = await fetch("https://raw.githubusercontent.com/MaayanLab/cfde-wheel/refs/heads/main/src/dccs.json")
			setDccs(await r.json())
		}
		fetch_dccs()
	}, [])
	
	return (
		<InteractiveNavModal>
				<InteractiveNavComponent dccs={dccs}/>
		</InteractiveNavModal>
	)
}

export default CFDEWheel