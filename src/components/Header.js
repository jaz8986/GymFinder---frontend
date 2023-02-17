import logo from '../assets/logo.png'
import header from '../assets/header.png'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Grid>
            <Grid.Row>
                <GridColumn width={2}>
                    <Link to="/">
                        <img style={{width: "200px"}} src={logo} alt="gymfinder logo" />
                    </Link> 
                </GridColumn>
                <GridColumn style={{display: 'flex', alignItems: "center", justifyContent: "center"}} width={10}>
                    <img src={header} alt="header"/>
                </GridColumn>
                <GridColumn width={2}>
                    <div style={{display: 'flex', alignItems: "right", justifyContent:"right", color: "white"}}>
                        <Link to="/memberships">
                            Memberships
                        </Link>
                        </div>
                </GridColumn>
                <GridColumn width={2}>
                    <Link to='/gyms/new'>
                        Add A New Gym!
                    </Link>
                </GridColumn>
            </Grid.Row>
        </Grid>
    ) 
}

export default Header