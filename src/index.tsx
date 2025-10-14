import InteractiveNavModal from "./modal";
import InteractiveNavComponent from "./interactive";
import { Container } from "@mui/material";

const CFDEWheel = () => {
	return (
		<InteractiveNavModal>
			<Container sx={{height: "100vh", width: "100vw"}}>
				<InteractiveNavComponent/>
			</Container>
		</InteractiveNavModal>
	)
}

export default CFDEWheel