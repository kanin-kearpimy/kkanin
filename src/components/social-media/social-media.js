import * as React from 'react'
import { Button } from '@material-ui/core'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'
import Description from '@material-ui/icons/Description'

import './social-media.css'

const icon = {
    linkedin: <LinkedIn />,
    github: <GitHub />,
    medium: <Description />
}

const SocialMedia = ({ type, text, link }) => {
    return (
        <Button href={link}>
            {icon[type]}  {text}
        </Button>
    )
}

export default SocialMedia