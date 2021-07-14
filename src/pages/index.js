import * as React from "react"
import Layout from '../components/layout'
import Image from '../components/image/image'
import Hashtag from '../components/hashtag/hashtag'
import SocialMedia from '../components/social-media/social-media'
import { Grid, Typography, List, ListItem, ListItemText, Link, Box  } from '@material-ui/core'
import Assignment from '@material-ui/icons/Assignment'
import CardCustomize from '../components/card/card'
import image from '../images/profile-picture.png'

const Header = () => {
    const hashtags = [
        {type: 'web', text: 'react'},
        {type: 'web', text: 'vue'},
        {type: 'php', text: 'php'},
        {type: 'php', text: 'laravel'},
        {type: 'python', text: 'python'},
        {type: 'python', text: 'fastapi'},
        {type: 'python', text: 'flask'},
        {type: 'python', text: 'computer-vision'},
        {type: 'softskill', text: 'community-builder'},
        {type: 'softskill', text: 'visionary-practitioner'},
    ]
    
    const connection = [
        {type: 'github', text: 'GitHub', link: 'https://github.com/kanin-kearpimy/'},
        {type: 'linkedin', text: 'LinkedIn', link: 'https://www.linkedin.com/in/kanin-kearpimy-48a2b2165/'},
        {type: 'medium', text: 'Medium', link: 'https://medium.com/@kaninkearpimy/'}
    ]

    return (
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
                <Typography variant="h5">Software Engineer who love DATA.</Typography>
                <Grid style={{marginTop: '12px'}} container xs={12} >
                    {
                        hashtags.map((item, index) => {
                            return (
                                <Hashtag key={index} type={item.type}>{item.text}</Hashtag>
                            )
                        })
                    }
                </Grid>
                <Grid style={{marginTop: '12px'}} direction="row" container xs={12}>
                    {
                        connection.map((item, index) => {
                            return (
                                <SocialMedia key={index} text={item.text} type={item.type} link={item.link} />
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

const AboutMe = () => {
    return (
        <Grid
            style={{marginTop: '28px'}}
            container 
            xs={6} 
            direction="column">
                <Typography variant="h5">About Me</Typography>
                <Typography variant="body1">Software Engineer who passionate in applying machine learning to solve business complex. 
                <br />I dedicate self-learning in data world and having fun building web-development. I've been seeking for open-source project to initiate and contribute.</Typography>
        </Grid>
    )
}

const Articles = () => {
    const articles = [
        {
            title: 'Technical',
            data: [
                {text: 'Short-Course Web-Development for none-technical people.', link: 'https://kaninkearpimy.medium.com/short-course-web-development-for-none-technical-people-b1a3131002eb', image:"https://miro.medium.com/max/1400/1*7JXR1nK4x86GQoVCjBgAbw.png"},
                {text: 'Hack the Crisis Thailand and technical tools behind it.', link: 'https://kaninkearpimy.medium.com/hack-the-crisis-thailand-and-technical-tools-behind-it-b35457d3cfac', image:"https://miro.medium.com/max/2000/1*zSGunPEqMphLQuoKkJHgVw.jpeg"},
            ]
        },
        {
            title: 'Others',
            data: [
                {text: 'สรุปหนังสือ Atomic Habit — Part 1', link: 'https://kaninkearpimy.medium.com/%E0%B8%AA%E0%B8%A3%E0%B8%B8%E0%B8%9B-atomic-habit-part-1-60c43de6fd0b', image: "https://miro.medium.com/max/1400/1*KEG9PrVGCdRxopYS6rMlGg.png"},
                {text: 'สรุปหนังสือ Atomic Habit — Part 2', link: 'https://kaninkearpimy.medium.com/%E0%B8%AA%E0%B8%A3%E0%B8%B8%E0%B8%9B-atomic-habit-part-2-600af0b77f53', image: "https://miro.medium.com/max/1400/1*-ixqjQ3ioxzCSH8-FHAT8A.png"},
                {text: 'Microsoft Student Partner — Reunion', link: 'https://kaninkearpimy.medium.com/microsoft-student-partner-reunion-22ab45c6b047', image: "https://miro.medium.com/max/4096/1*eBT2wnpNkWOgHWynKinFoQ.jpeg"},
                {text: 'สรุป Data Science Talk 3.0 by 100x and Clazy Cafe [07-Dec-2019]', link: 'https://kaninkearpimy.medium.com/%E0%B8%AA%E0%B8%A3%E0%B8%B8%E0%B8%9B-data-science-talk-3-0-by-100x-and-clazy-07-dec-2019-c346f4ea90ce', image: "https://miro.medium.com/max/2000/1*O8RkTB0EzsetCAs42pcLzg.jpeg"},
                {text: 'คนชอบฟังอย่างฉัน กับ Founder Apprentice', link: 'https://kaninkearpimy.medium.com/%E0%B8%84%E0%B8%99%E0%B8%8A%E0%B8%AD%E0%B8%9A%E0%B8%9F%E0%B8%B1%E0%B8%87%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%89%E0%B8%B1%E0%B8%99-%E0%B8%81%E0%B8%B1%E0%B8%9A-founder-apprentice-cf055759b643', image: "https://miro.medium.com/max/2000/1*fkKZw76w0kZAMwWuvJcfFg.jpeg"},
                {text: 'ตะกอนความคิดจาก 3 days AI Workshop', link: 'https://kaninkearpimy.medium.com/%E0%B8%95%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%99%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%88%E0%B8%B2%E0%B8%81-3-days-ai-workshop-8db9a6e39e0b', image: "https://miro.medium.com/max/1000/1*J7UHDdFfSt4XLiDATD3JqQ.jpeg"},
                {text: 'Past event Summary: [Bangkok AI] Meetup#8 “AI in Energy”', link: 'https://kaninkearpimy.medium.com/ai-in-energy-bangkok-ai-d894838ebb98', image: "https://miro.medium.com/max/2000/1*1F46zQS-HtuUsebBGhDt2w.jpeg"},
            ]
        }
    ]
    return (
        <Grid
            style={{marginTop: '28px'}}
            container
            xs={6}
            direction="column"
        >
        <Typography variant="h5">Articles</Typography>
            {/* {
                articles.map((item, index) => {
                    return (
                        <List component="div" key={index}>
                            <ListItem>
                                <ListItemText
                                primary={<Box component="div" style={{fontSize: '18px', display: 'flex', alignItems: 'center'}}><Assignment />{item.title}</Box>} 
                                
                                />
                            </ListItem>
                            {item.data.map((subItem, index) => {
                                return (
                                    <List key={index} component="div" disablePadding>
                                        <ListItem style={{paddingLeft: '40px'}}>
                                            <ListItemText primary={<Link style={{fontSize: '20px'}} href={subItem.link}>{subItem.text}</Link>}></ListItemText>
                                        </ListItem>
                                    </List>
                                )
                            })}
                        </List>
                    )
                })
            } */}
            {
                articles.map((item, index) => {
                    return (
                        <Box key={index} style={{marginTop: '22px'}}>
                            <Box component="div" style={{fontSize: '18px', display: 'flex', alignItems: 'center'}}><Assignment />{item.title}</Box>
                            <Box xs={12} component="div" style={{fontSize: '18px', display: 'flex', flexWrap: 'wrap', marginTop: '22px', justifyContent: 'space-between'}}>
                                {item.data.map((subItem, index) => {
                                    return (
                                        <CardCustomize key={index} title={subItem.text} link={subItem.link} image={subItem.image} />
                                    )
                                })}
                            </Box>
                        </Box>
                    )
                })
            }
        </Grid>
    )
}

const Publication = () => {
    const publications = [
        {text: 'Overmind: A Collaborative Decentralized Machine Learning Framework', link: 'https://astesj.com/v05/i06/p34/'},
        {text: 'Prediction of Heart Disease Risk Using Data Mining Techniques of Logistic Regression and Neural Network', link: 'https://drive.google.com/file/d/1T6I5YWeoh6gxZuhkP_gcjYSESy9CgZX8/view/'}
    ]

    return (
        <Grid
            style={{marginTop: '28px'}}
            container
            xs={6}
            direction="column"
        >
        <Typography variant="h5">Publications</Typography>
            {
                publications.map((item, index) => {
                    return (
                        <List key={index} component="div" key={index}>
                            <ListItem>
                                <ListItemText
                                primary={<Link style={{fontSize: '20px'}} href={item.link}>{item.text}</Link>} 
                                
                                />
                            </ListItem>
                        </List>
                    )
                })

            }
        </Grid>
    )
}

const SimplePort = () => {
    return (
        <Layout>
            <Header />
            <AboutMe />
            <Publication />
            <Articles />
        </Layout>
    )
}

export default SimplePort