"use client"
import {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import Image from 'next/image';

export default function InteractiveNavModal({children}: {children: React.ReactNode, fab?: boolean}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Fab onClick={handleOpen} sx={{
		position: 'fixed',
		bottom: 50,
		right: 50,
		height: 70,
		width: 70,
		backgroundColor: '#FFF',
		padding: 0
	}}>
		<Image src="/img/interactive/cfde_unified_icon.svg" alt={'nav-but'} width={120} height={120}/>
	  </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {children}
        </Box>
      </Modal>
    </div>
  );
}

