import * as React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Link } from '@material-ui/core'

const CardCustomize = ({ title, description, image, link }) => {
    return(
        <Card style={{maxWidth: '320px', width: '320px', margin: '12px'}}>
            <Link href={link}>
                <CardActionArea>
                    <CardMedia 
                        image={image}
                        component="img"
                        alt={title}
                        // image="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients-asia.com/news/research/mi-tea-gation-how-tea-might-lower-the-prevalence-of-vitamin-d-deficiency-among-healthy-taiwanese/9854443-1-eng-GB/Mi-tea-gation-How-tea-might-lower-the-prevalence-of-vitamin-D-deficiency-among-healthy-Taiwanese_wrbm_large.jpg"
                        title={title}
                        height="150"
                    />
                    <CardContent>
                        <Typography variant="h6" component="h3">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
}

export default CardCustomize