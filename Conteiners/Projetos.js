import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Dialog, Grid, IconButton, makeStyles, Typography, DialogTitle, DialogContent } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import Image from 'material-ui-image'
import React from "react";
import stickLogo from './files/logo-stickrun.png'
import stickImgFirst from './files/stick-run-1.png'
import stickImgSecond from './files/stick-run-2.png'

function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
    
    return (
        <Dialog onClose={handleClose} open={open} maxWidth="md" >
            <DialogTitle disableTypography className={classes.dialogTitle}>
            <Typography variant="h6">Stick Run</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
            ) : null}
            </DialogTitle>
            <DialogContent scroll='paper' className={classes.dialogItem}>
                <p class="texto">Stick Run é um projeto que criei quando queria aprender mais sobre desenvolvimento de jogos e C#, foi criado usando Unity e praticamente todo o conhecimento que precisei foi tirado da internet e da documentação da Unity.</p>
                <Image 
                    src={stickImgFirst}
                    color="black"
                    aspectRatio="1/2.2"
                    cover="true"
                />
                <p class="imagem-desc">Imagem de uma das primeiras versões</p>
                <p class="texto">O jogo é baseado no famoso jogo do dinossauro do navegador Chrome. O projeto inicial foi simples, mas conforme o desenvolvimento foi avançando, decidi adicionar mais e mais elementos ao jogo.</p>
                <p class="texto">Como foi um dos meus primeiros jogos que criei, e não tinha muita experiencia, o código era bem simples e “feio”, o projeto atual já está totalmente funcional e é possível jogar normalmente, a arte do jogo está simples, porém suficiente.</p>
                <Image 
                    src={stickImgSecond}
                    color="black"
                    aspectRatio="1/1.8"
                    cover="true"
                />
                <p class="imagem-desc">Imagem da versão atual</p>
                <p class="texto">Ainda gostaria de retornar ao projeto e melhorar mais ainda, adicionando novas mecânicas e elementos ao jogo, refazer as artes, animações, física e etc. Mas no momento estou focado em aprender novas linguagens.</p>
                <p class="texto">Caso queira jogar a versão atual, ela está disponivel no botão abaixo:</p>
            </DialogContent>
      </Dialog>
    );
  }

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#37474f',
      height: '100vh',
    },
    itemCard: {
        color: 'white',
        backgroundColor: '#263238',
        textAlign: "center",
        width: 250,
    },
    itemImage: {
        height: 150,
    },
    dialogItem: {
        padding: '0 30px',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
  }));

export default function Projetos() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState([1]);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
    };

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Box height={50}/>
            <Grid conteiner spacing={2}>
                <Grid item xs>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item>
                            <Card className={classes.itemCard}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.itemImage}
                                        image={stickLogo}
                                        title="StickRun logo"
                                        onClick={handleClickOpen}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Stick Run
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Primeiro jogo completo
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card className={classes.itemCard}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.itemImage}
                                        //image={stickLogo}
                                        title="StickRun logo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Vazio
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            -
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card className={classes.itemCard}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.itemImage}
                                        //image={stickLogo}
                                        title="StickRun logo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Vazio
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            -
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}