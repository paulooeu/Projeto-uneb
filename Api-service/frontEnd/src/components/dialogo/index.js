import React from 'react';
import Button from '@material-ui/core/Button';
import FromUsuario from '../../pages/usuario/from'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {DivButton} from './style'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <DivButton >
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Cadastrar Usuario
        </Button>
      </DivButton>
      <Dialog
       open={open} 
       TransitionComponent={Transition}
       keepMounted
       onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"></DialogTitle>
        <DialogContent>
          <FromUsuario/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
       
        </DialogActions>
      </Dialog>
    </div>
  );
}