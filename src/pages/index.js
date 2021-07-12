import * as React from "react"
import Button from '@material-ui/core/Button'
import Layout from '../components/layout'
import Image from '../components/image/image'
import { Grid, Typography  } from '@material-ui/core'
import image from '../images/profile-picture.png'


const SimplePort = () => {
    return (
        <Layout>
            <Grid 
                container 
                xs={8}
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                <Grid container xs={6} justifyContent="center">
                    <Image width="80%" imagePath={image} altText="Kanin Kearpimy" />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h2">Kanin Kearpimy</Typography>
                    <Typography variant="h5">Software Engineer</Typography>
                    <Typography variant="caption">Software Engineer</Typography>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default SimplePort