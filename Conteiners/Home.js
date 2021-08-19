import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#37474f',
      height: '100vh',
    },
    postItem: {
        color: 'white',
        padding: 50,
        backgroundColor: '#263238',
        textAlign: "center",
    },
    postData: {
        color: '#718792',
        textAlign: "end",
        fontStyle: 'italic',
    },
  }));

export default function Home() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Box height={50}/>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item xs={12}>
                    <Paper className={classes.postItem}> 
                        <h2>Sobre</h2>

                        <p>O objetivo do site é conciliar todo o conhecimento e experiência adquirida durante minha carreira como programador.</p>
                        <p>Principalmente meus projetos em HTML e CSS, mas também em Java Script e qualquer outra linguagem que estiver estudando.</p>
                        <p>Atualmente estou cursando Análise e desenvolvimento de sistema, mas também tenho interesse em aprender e estudar sozinho, além de fazer cursos a parte através da Alura, também faço pesquisas e aprendo coisas de meu interesse pela internet e afins.</p>
                        <p>Já fiz muitos projetos de vários tipos: Arduino, Jogos, Sites. Além de aprender várias linguagens diferentes:  C, C++, Java, Java Script, Python, HTML, CSS. E pretendo não parar por aqui.</p>

                        <p className={classes.postData}>Post Principal - 01/07/2021</p>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                        <Paper className={classes.postItem}>
                            <h2>Exemplo post</h2>

                            <p>Exemplo descrição</p>

                            <p className={classes.postData}>data</p>
                        </Paper>
                </Grid>
                
            </Grid>
        </Container>
    )
}