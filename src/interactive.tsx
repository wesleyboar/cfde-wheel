import { Container, Button, Typography, Tooltip, Link } from "@mui/material";
const dccs = [
	{
	  id: '65af85ae-82d5-5b81-bc66-6bddaa6420ce',
	  short_label: 'Kids First',
	  homepage: 'https://kidsfirstdrc.org/',
	  icon: '../img/Kids First.png',
	  description: 'Data, tools, and resources empowering pediatric research'
	},
	{
	  id: 'e332dadd-8084-5fbc-be41-29d75775aab3',
	  short_label: 'A2CPS',
	  homepage: 'https://a2cps.org/',
	  icon: '../img/A2CPS.png',
	  description: 'Understanding the complex biological processes underlying chronic pain'
	},
	{
	  id: '803ad44d-e7a2-550a-95c6-57855bf06be8',
	  short_label: 'HuBMAP',
	  homepage: 'https://hubmapconsortium.org/',
	  icon: '../img/HuBMAP.png',
	  description: 'Cellular spatial atlas of the human body'
	},
	{
	  id: undefined,
	  short_label: 'ComPASS',
	  homepage: ' nih.gov/compass',
	  icon: '../img/interactive/compass.svg',
	  description: 'Community-led research on structural drivers of health'
	},
	{
	  id: 'd6bb00c3-7224-5001-b9c5-9838622fba40',
	  short_label: '4DN',
	  homepage: 'https://www.4dnucleome.org/',
	  icon: '../img/4DN.png',
	  description: 'Nuclear organization in space and time'
	},
	{
	  id: 'f3f490cf-fd69-579c-8ea3-472c7cf3fb59',
	  short_label: 'LINCS',
	  homepage: 'https://lincsproject.org/',
	  icon: 'https://cfde-drc.s3.amazonaws.com/assets/img/LINCS-logo.png',
	  description: 'Omics signatures for drug & target discovery'
	},
	{
	  id: 'a1289ebb-0306-59a1-b0fc-e4d03a4790d7',
	  short_label: 'IDG',
	  homepage: 'https://druggablegenome.net/',
	  icon: '../img/IDG.png',
	  description: 'Illuminating GPCRs, kinases, ion channels, & other drug targets'
	},
	{
	  id: undefined,
	  short_label: 'NPH',
	  homepage: ' nih.gov/nutritionforprecisionhealth',
	  icon: '../img/interactive/nph.png',
	  description: 'Predictive algorithms to advance nutrition research'
	},
	{
	  id: 'e31052b0-ac50-5ede-9828-698ff3610427',
	  short_label: 'GlyGen',
	  homepage: 'https://www.glygen.org/',
	  icon: 'https://cfde-drc.s3.amazonaws.com/assets/img/glygen.png',
	  description: 'Computational and informatics resources for glycoscience'
	},
	{
	  id: '75b3be39-a021-5d80-b7e2-2a7938a1e11a',
	  short_label: 'Bridge2AI',
	  homepage: 'https://bridge2ai.org/',
	  icon: '../img/Bridge2AI.png',
	  description: 'Biomedical AI ↔ people, data & ethics'
	},
	{
	  id: 'a9aeab22-4fbc-5329-aef6-21110f463c23',
	  short_label: 'MoTrPAC',
	  homepage: 'https://motrpac-data.org/',
	  icon: '../img/MoTrPAC.png',
	  description: 'The molecular map of exercise'
	},
	{
	  id: '089d8d63-3364-526f-9706-80d62d0ec88c',
	  short_label: 'Metabolomics',
	  homepage: 'https://www.metabolomicsworkbench.org/',
	  icon: '../img/Metabolomics.png',
	  description: 'Metabolomics'
	},
	{
	  id: '2399794e-74c6-5735-a039-0782cdeeb1e2',
	  short_label: 'SPARC',
	  homepage: 'https://sparc.science/',
	  icon: '../img/SPARC.svg',
	  description: 'Bridging the body and brain'
	},
	{
	  id: undefined,
	  short_label: 'SMaHT',
	  homepage: ' nih.gov/somatic-mosaicism-across-human-tissues-smaht',
	  icon: '../img/interactive/smath.png',
	  description: "Mapping somatic mutations' health implications"
	},
	{
	  id: 'cbfd44b8-684d-56b9-bfd4-45c0e259f896',
	  short_label: 'HMP',
	  homepage: 'https://portal.hmpdacc.org/',
	  icon: '../img/HMP.png',
	  description: 'Human microbiome in health and disease'
	},
	{
	  id: 'b3028db2-209c-5862-8f4d-33c5b312332e',
	  short_label: 'GTEx',
	  homepage: 'https://www.gtexportal.org/home/',
	  icon: '../img/GTEx.png',
	  description: 'Gene expression and regulation across human tissues'
	},
	{
	  id: 'dd66e8a5-0e05-5a43-a0ca-18cc3698bb36',
	  short_label: 'SenNet',
	  homepage: 'https://sennetconsortium.org/',
	  icon: '../img/SenNet.png',
	  description: 'Mapping senescent cells'
	},
	{
	  id: 'f65babf7-2875-5725-9635-210d654533f1',
	  short_label: 'ExRNA',
	  homepage: 'https://exrna.org/',
	  icon: '../img/exRNA.png',
	  description: 'Extracellular RNA communication'
	}
  ]

  const centers = [
	{
		label: "cloud",
		endpoint: "https://info.cfde.cloud/centers/CWIC",
		rotate: "-72deg",
		position: {
			left: 85,
			top: 310
		},
		text_position: {
			top: 80,
			left: "50%"
		},
		image_position: {
			top: 100,
			left: "15%"
		}
	},
	{
		label: "knowledge",
		endpoint: "https://info.cfde.cloud/centers/KC",
		position: {
			left: 60,
			top: 450
		},
		text_position: {
			top: 120,
			left: "10%"
		},
		image_position: {
			top: 50,
			left: "17%"
		}
	},
	{
		label: "training",
		endpoint: "https://info.cfde.cloud/centers/TC",
		rotate: "72deg",
		position: {
			left: -83,
			top: 467
		},
		text_position: {
			top: 105,
			left: "10%"
		},
		image_position: {
			top: 35,
			left: "35%"
		}
	},
	{
		label: "data",
		endpoint: "https://info.cfde.cloud/centers/DRC",
		rotate: "144deg",
		position: {
			left: -143,
			top: 338
		},
		text_position: {
			top: 50,
			left: "25%"
		},
		image_position: {
			top: 75,
			left: "60%"
		}
	},
	{
		label: "coordination",
		endpoint: "https://info.cfde.cloud/centers/ICC",
		rotate: '216deg',
		position: {
			left: -39,
			top: 240
		},
		text_position: {
			top: 60,
			left: "23%"
		},
		image_position: {
			top: 110,
			left: "47%"
		}
	},
]

const radius = 280
const pie_chunk = 2*Math.PI/(dccs.length)

export default function InteractiveNavComponent() {
	return (
		<Container sx={{position: "relative", width: 200}}>
				{dccs.map((dcc, i)=>{
					const angle = pie_chunk * i
					const x = radius * Math.cos(angle)
					const y = radius * Math.sin(angle) + 400
					return (
						<Tooltip title={<Typography>{dcc.description}</Typography>} key={dcc.short_label || ''} >
							<Button variant="contained" 
								// disableElevation
								sx={{
									background: "#fff", 
									borderRadius: 1000, 
									width: 90, 
									height: 90,
									position: "absolute",
									transform: `translate(${x}px, ${y}px)`,
								}}
							>
								<Link href={dcc.homepage.startsWith(' ') ? dcc.homepage: `https://info.cfde.cloud/dcc/${dcc.short_label}`} target="_blank" rel="noopener noreferrer">
									<img src={dcc.icon || ''} alt={dcc.short_label || ''} width={70} height={70}/>
								</Link>
							</Button>
						</Tooltip>
					)
				})}
				{centers.map((center, i)=>{
					return (
						<Button key={center.label} sx={{
							position: "absolute",
							width: 190,
							height: 190,
							// transform: `translate(${x}px, ${y}px) rotate(${center.rotate || '0deg'})`,
							...(center.position || {})
						}}>
							<Container sx={{
								position: "relative",
								width: 160,
								height: 190,
							}}>
								<a href={center.endpoint}>
								
									<img src={`/img/interactive/${center.label}.png`} alt={center.label} loading="lazy" decoding="async"  sizes="100vw" style={{position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "contain", color: "transparent", transform: `rotate(${center.rotate || '0deg'})`}}/>
									<Typography sx={{color: "#FFF", position: "absolute", textTransform: "uppercase", ...(center.text_position || {})}}>
										<b>{center.label}</b>
									</Typography>
									<img src={`/img/interactive/${center.label} 1.png`} alt={center.label} width={40} height={40} style={{position: "absolute", zIndex: 100, ...(center.image_position || {})}}/>
								</a>
							</Container>
						</Button>
					)
				})}
				<Button variant="contained" 
					sx={{
						background: "#fff", 
						borderRadius: 1000, 
						width: 120, 
						height: 120,
						position: "absolute",
						top: 395,
						left: 5,
						padding: 1,
						zIndex: 100,
					}}
				>
					<Link href="/info">
						<img src={'../img/interactive/CFDE_logo.png'} alt={'cfde_logo'} width={150} height={150} style={{zIndex: 100}}/>
					</Link>
				</Button>
				<Container
					sx={{
						background: "#000", 
						borderRadius: "50%", 
						width: 230, 
						height: 230,
						position: "absolute",
						top: 340,
						left: -50,
						opacity: "0.5"
					}}
				></Container>
		</Container>
	)
}