import logo from '../assets/logo.png'
import header from '../assets/header.png'
import { Grid, GridColumn } from 'semantic-ui-react'

function Header() {
    return (
        <Grid>
            <Grid.Row>
                <GridColumn width={2}>           
                    <img src={logo} alt="gymfinder logo" />
                </GridColumn>
                <GridColumn style={{display: 'flex', alignItems: "center", justifyContent: "center"}} width={10}>
                    <img src={header} alt="header"/>
                </GridColumn>
                <GridColumn width={2}>
                    <div style={{display: 'flex', alignItems: "right", justifyContent:"right", color: "white"}}>
                       <i class="user circle outline icon" ></i>
                    </div>
                </GridColumn>
            </Grid.Row>
        </Grid>
    ) 
}

export default Header