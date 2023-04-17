import logo from '../assets/logo.png'
import header from '../assets/header.png'
import memberships from '../assets/memberships.png'
import addanewgym from '../assets/addanewgym.png'
import { Grid, GridColumn } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Grid>
            <Grid.Row>
                <GridColumn width={1}>
                    <Link to="/">
                        <img style={{width: "100px"}} src={logo} alt="gymfinder logo" />
                    </Link> 
                </GridColumn>
                <GridColumn width={9}>
                    <img src={header} style={{width: "400px"}} alt="header"/>
                </GridColumn>
                <GridColumn width={1}>
                    <div style={{display: 'flex', alignItems: "right", justifyContent:"right", color: "white"}}>
                        <Link to="/memberships">
                            <img src={memberships} style={{width: "200px"}} alt="header"/>
                        </Link>
                        </div>
                </GridColumn>
                <GridColumn width={3}>
                    <Link to='/gyms/new'>
                        <img src={addanewgym} style={{width: "200px"}} alt="header"/>
                    </Link>
                </GridColumn>
            </Grid.Row>
        </Grid>
    ) 
}

export default Header