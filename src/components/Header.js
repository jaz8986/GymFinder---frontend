import logo from '../assets/logo.png'
import { Grid, GridColumn } from 'semantic-ui-react'

function Header() {
    return (
        <Grid>
            <Grid.Row>
                <GridColumn width={2}>           
                    <img style={{width:'300%'}} src={logo} alt="gymfinder logo" />
                </GridColumn>
                <GridColumn width={10}>
                    <div style={{display: 'flex', justifyContent: "center", alignItems: "center", color: "whitesmoke"}}>Gym Finder</div>
                </GridColumn>
                <GridColumn width={1}>
                    <div style={{color: "whitesmoke"}}>Login</div>
                </GridColumn>
            </Grid.Row>
        </Grid>
    ) 
}

export default Header