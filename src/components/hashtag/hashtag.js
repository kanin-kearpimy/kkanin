import * as React from 'react'
import { Typography } from '@material-ui/core'

import './hashtag.css'

const hashtagType = {
    python: '-python',
    php: '-php',
    web: '-web',
    softskill: '-softskill'
}

const Hashtag = ({ type, children }) => {
    return (
        <Typography className={`hashtag ${hashtagType[type]}`} variant="caption">#{children}</Typography>
    )
}

export default Hashtag