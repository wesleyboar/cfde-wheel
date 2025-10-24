import { Container, Button, Typography, Tooltip, Link, Box } from "@mui/material";
const dccs = [
	{
	  id: '65af85ae-82d5-5b81-bc66-6bddaa6420ce',
	  short_label: 'Kids First',
	  homepage: 'https://info.cfde.cloud/dcc/Kids First',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/Kids First.png',
	  description: 'Data, tools, and resources empowering pediatric research'
	},
	{
	  id: 'e332dadd-8084-5fbc-be41-29d75775aab3',
	  short_label: 'A2CPS',
	  homepage: 'https://info.cfde.cloud/dcc/A2CPS',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/A2CPS.png',
	  description: 'Understanding the complex biological processes underlying chronic pain'
	},
	{
	  id: '803ad44d-e7a2-550a-95c6-57855bf06be8',
	  short_label: 'HuBMAP',
	  homepage: 'https://info.cfde.cloud/dcc/HuBMAP',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/HuBMAP.png',
	  description: 'Cellular spatial atlas of the human body'
	},
	{
	  id: 'd6bb00c3-7224-5001-b9c5-9838622fba40',
	  short_label: '4DN',
	  homepage: 'https://info.cfde.cloud/dcc/4DN',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/4DN.png',
	  description: 'Nuclear organization in space and time'
	},
	{
	  id: 'f3f490cf-fd69-579c-8ea3-472c7cf3fb59',
	  short_label: 'LINCS',
	  homepage: 'https://info.cfde.cloud/dcc/LINCS',
	  icon: 'https://cfde-drc.s3.amazonaws.com/assets/img/LINCS-logo.png',
	  description: 'Omics signatures for drug & target discovery'
	},
	{
	  id: 'a1289ebb-0306-59a1-b0fc-e4d03a4790d7',
	  short_label: 'IDG',
	  homepage: 'https://info.cfde.cloud/dcc/IDG',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/IDG.png',
	  description: 'Illuminating GPCRs, kinases, ion channels, & other drug targets'
	},
	{
	  id: undefined,
	  short_label: 'NPH',
	  homepage: 'https://commonfund.nih.gov/nutritionforprecisionhealth',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/nph.png',
	  description: 'Predictive algorithms to advance nutrition research'
	},
	{
	  id: 'e31052b0-ac50-5ede-9828-698ff3610427',
	  short_label: 'GlyGen',
	  homepage: 'https://info.cfde.cloud/dcc/GlyGen',
	  icon: 'https://cfde-drc.s3.amazonaws.com/assets/img/glygen.png',
	  description: 'Computational and informatics resources for glycoscience'
	},
	{
	  id: '75b3be39-a021-5d80-b7e2-2a7938a1e11a',
	  short_label: 'Bridge2AI',
	  homepage: 'https://info.cfde.cloud/dcc/Bridge2AI',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/Bridge2AI.png',
	  description: 'Biomedical AI ↔ people, data & ethics'
	},
	{
	  id: 'a9aeab22-4fbc-5329-aef6-21110f463c23',
	  short_label: 'MoTrPAC',
	  homepage: 'https://info.cfde.cloud/dcc/MoTrPAC',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/MoTrPAC.png',
	  description: 'The molecular map of exercise'
	},
	{
	  id: '089d8d63-3364-526f-9706-80d62d0ec88c',
	  short_label: 'Metabolomics',
	  homepage: 'https://info.cfde.cloud/dcc/Metabolomics',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/Metabolomics.png',
	  description: 'Metabolomics'
	},
	{
	  id: undefined,
	  short_label: 'SCGE',
	  homepage: 'https://commonfund.nih.gov/editing',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/scge.png',
	  description: 'Reducing the burden of diseases caused by genetic changes'
	},
	{
	  id: '2399794e-74c6-5735-a039-0782cdeeb1e2',
	  short_label: 'SPARC',
	  homepage: 'https://info.cfde.cloud/dcc/SPARC',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/SPARC.svg',
	  description: 'Bridging the body and brain'
	},
	{
	  id: undefined,
	  short_label: 'SMaHT',
	  homepage: 'https://info.cfde.cloud/dcc/SMaHT',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/smath.png',
	  description: "Mapping somatic mutations' health implications"
	},
	{
	  id: 'cbfd44b8-684d-56b9-bfd4-45c0e259f896',
	  short_label: 'HMP',
	  homepage: 'https://info.cfde.cloud/dcc/HMP',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/HMP.png',
	  description: 'Human microbiome in health and disease'
	},
	{
	  id: 'b3028db2-209c-5862-8f4d-33c5b312332e',
	  short_label: 'GTEx',
	  homepage: 'https://info.cfde.cloud/dcc/GTEx',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/GTEx.png',
	  description: 'Gene expression and regulation across human tissues'
	},
	{
	  id: 'dd66e8a5-0e05-5a43-a0ca-18cc3698bb36',
	  short_label: 'SenNet',
	  homepage: 'https://info.cfde.cloud/dcc/SenNet',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/SenNet.png',
	  description: 'Mapping senescent cells'
	},
	{
	  id: 'f65babf7-2875-5725-9635-210d654533f1',
	  short_label: 'ExRNA',
	  homepage: 'https://info.cfde.cloud/dcc/ExRNA',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/exRNA.png',
	  description: 'Extracellular RNA communication'
	}
  ]

  const centers = [
		{
			label: "cloud",
			endpoint: "https://info.cfde.cloud/centers/CWIC",
			rotate: "-72deg",
			position: {
				left: {md: 85, xs: 60},
				top: {md: 310, xs: 320}
			},
			text_position: {
				top: {md: 80, xs: 55},
				left: {md: "50%", xs: "63%"},

			},
			image_position: {
				top: 90,
				left: "20%"
			},
			image_position_small: {
				top: 70,
				left: "30%"
			}
		},
		{
			label: "knowledge",
			endpoint: "https://info.cfde.cloud/centers/KC",
			position: {
				left: {md: 58, xs: 40},
				top: {md: 449, xs: 420}
			},
			text_position: {
				top: {md: 125, xs: 100},
				left: "10%"
			},
			image_position: {
				top: 53,
				left: "13%"
			},
			image_position_small: {
				top: 45,
				left: "15%"
			}
		},
		{
			label: "training",
			endpoint: "https://info.cfde.cloud/centers/TC",
			rotate: "72deg",
			position: {
				left: {md: -83, xs: -65},
				top: {md: 467, xs: 434}
			},
			text_position: {
				top: {md: 105, xs: 85},
				left: "15%"
			},
			image_position: {
				top: 35,
				left: "45%"
			},
			image_position_small: {
				top: 30,
				left: "42%"
			}
		},
		{
			label: "data",
			endpoint: "https://info.cfde.cloud/centers/DRC",
			rotate: "144deg",
			position: {
				left: {md: -143, xs: -110},
				top: {md: 338, xs: 337}
			},
			text_position: {
				top: {md: 50, xs: 30},
				left: {md: "25%", xs: "12%"}
			},
			image_position: {
				top: 65,
				left: "55%"
			},
			image_position_small: {
				top: 55,
				left: "45%"
			}
		},
		{
			label: "coordination",
			endpoint: "https://info.cfde.cloud/centers/ICC",
			rotate: '216deg',
			position: {
				left: {md: -39, xs: -31},
				top: {md: 240, xs: 265}
			},
			text_position: {
				top: {md: 60, xs: 30},
				left: "23%"
			},
			image_position: {
				top: 100,
				left: "47%"
			},
			image_position_small: {
				top: 55,
				left: "47%"
			}
		},
	]

const radius = 280
const radius_small = 195
const pie_chunk = 2*Math.PI/(dccs.length)

export default function InteractiveNavComponent() {
	return (
		<Container sx={{position: "relative", width: 200}}>
				{dccs.map((dcc, i)=>{
					const angle = pie_chunk * i
					const x = radius * Math.cos(angle)
					const y = radius * Math.sin(angle) + 400
					const x_small = radius_small * Math.cos(angle)
					const y_small = radius_small * Math.sin(angle) + 400
					
					return (
						<Tooltip title={<Typography>{dcc.description}</Typography>} key={dcc.short_label || ''} >
							<Button variant="contained" 
								// disableElevation
								sx={{
									background: "#fff", 
									borderRadius: 1000, 
									width: {md: 90, xs: 60}, 
									height:  {md: 90, xs: 60},
									position: "absolute",
									transform: {md: `translate(${x}px, ${y}px)`, xs: `translate(${x_small}px, ${y_small}px)`},
								}}
							>
								<Link href={dcc.homepage} target="_blank" rel="noopener noreferrer">
									<Box 
										sx={{
											position: 'relative',
											width: {md: 60, xs: 40},
											overflow: 'hidden',
											height: {md: 60, xs: 40}
										}}
									>
										<img src={dcc.icon || ''} alt={dcc.short_label || ''} style={{
											top: 0,
											left: 0,
											position: 'absolute',
											maxWidth: '100%',
											height: '100%',
											objectFit: 'contain',
											color: 'transparent'
										}}/>
									</Box>
								</Link>
							</Button>
						</Tooltip>
					)
				})}
				{centers.map((center, i)=>{
					return (
						<Button key={center.label} sx={{
							position: "absolute",
							width: {md: 190, xs: 150},
							height: {md: 190, xs: 150},
							// transform: `translate(${x}px, ${y}px) rotate(${center.rotate || '0deg'})`,
							...(center.position || {})
						}}>
							<Container sx={{
								position: "relative",
								width: {md: 170, xs: 125},
								height: {md: 170, xs: 125},
							}}>
								<a href={center.endpoint}>
									
									<img src={`https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/${center.label}.png`} alt={center.label} loading="lazy" decoding="async"  sizes="100vw" style={{
										position: "absolute",
										height: "100%",
										width: "100%",
										maxWidth: "100%",
										inset: "0px",
										objectFit: "contain",
										color: "transparent",
										display: "block",
										transform: `rotate(${center.rotate || '0deg'})`}}/>
									<Typography sx={{color: "#FFF", position: "absolute", textTransform: "uppercase", fontSize: {md: 16, xs: 11.5}, ...(center.text_position || {})}}>
										<b>{center.label}</b>
									</Typography>
									<Container sx={{display: {md: 'block', xs: 'none'}}}>
										<img src={`https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/${center.label} 1.png`} alt={center.label} style={{position: "absolute", width: 40, height: 40, zIndex: 100, ...(center.image_position || {})}}/>
									</Container>
									<Container sx={{display: {md: 'none', xs: 'block'}}}>
										<img src={`https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/${center.label} 1.png`} alt={center.label} style={{position: "absolute", zIndex: 100, width: 30, height: 30, ...(center.image_position_small || {})}}/>
									</Container>
									
								</a>
							</Container>
						</Button>
					)
				})}
				<Button variant="contained" 
					sx={{
						background: "#fff", 
						borderRadius: 1000, 
						width: {md: 120, xs: 110}, 
						height: {md: 120, xs: 110},
						position: "absolute",
						top: {md: 395, xs: 365},
						left: {md: 5, xs: -5},
						padding: 1,
						zIndex: 100,
					}}
				>
					<Link href="https://info.cfde.cloud">
						<Box 
							sx={{
								position: 'relative',
								width: {md: 100, xs: 80},
								overflow: 'hidden',
								height: {md: 100, xs: 80},
								zIndex: 100,
							}}
						>
							<img src={'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/CFDE_logo.png'} alt={'CFDE_Logo'} style={{
								top: 0,
								left: 0,
								position: 'absolute',
								maxWidth: '100%',
								height: '100%',
								objectFit: 'contain',
								color: 'transparent'
							}}/>
						</Box>
					</Link>
				</Button>
				<Container
					sx={{
						background: "#000", 
						borderRadius: "50%", 
						width: {md: 230, xs: 200}, 
						height: {md: 230, xs: 200},
						position: "absolute",
						top: {md: 340, xs: 320},
						left: {md: -50, xs: -50},
						opacity: "0.5"
					}}
				></Container>
		</Container>
	)
}