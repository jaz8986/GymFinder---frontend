import {Grid, Checkbox} from 'semantic-ui-react'

function EditMembership () {
    return (
            <div>
            <Grid>
                <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12}>
                        <form class="ui form">
                                <div class="field">
                                    <label>Gym</label>
                                    <div class="ui input">
                                        <input type="text" placeholder="Gym" />
                                    </div>
                                </div>
                                <Checkbox
                                    radio
                                    label="Tier 1"
                                    name="Tier 1" />
                                <Checkbox
                                     radio
                                     label="Tier 2"
                                     name="Tier 2" />
                                <div class="field">
                                    <label>Name</label>
                                    <div class="ui input">
                                        <input type="text" placeholder="Gym" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label>Phone Number</label>
                                    <div class="ui input">
                                        <input type="text" placeholder="Gym" />
                                    </div>
                                </div>
                                <div class="field">
                                    <label>Email</label>
                                    <div class="ui input">
                                        <input type="text" placeholder="Gym" />
                                    </div>
                                </div>
                                {/* add attached members here. checkbox that if true returns a attached member form below */}
                        </form>
                    </Grid.Column>
                <Grid.Column width={2}></Grid.Column>
            </Grid>
            </div>
    )
}

export default EditMembership;