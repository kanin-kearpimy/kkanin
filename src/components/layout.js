import * as React from "react"
import Grid from '@material-ui/core/Grid'
class Layout extends React.Component {
    render() {
        const { children } = this.props
        return (
            <Grid container xs={12} justifyContent="center">
                { children }
            </Grid>
        )
    }
}

export default Layout