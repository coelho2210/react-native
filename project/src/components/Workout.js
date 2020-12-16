import React from 'react';
import styled from 'styled-components/native';


const Workout = styled.View`
    background-color:#F1F1F1;
    flex-direction:row;
    border-radius:10px;
    margin-bottom:20px;
    border:2px solid #DDD;

`;

const WorkoutInfo = styled.View``;

const WorkoutTitle = styled.View``;

const MuscleScroll =  styled.ScrollView``;

const WorkoutActions = styled.View``;

const WorkoutButton = styled.TouchableHighlight``;

const WorkoutButtonImage = styled.Image``;





export default () => {
    return (

        <Workout>
            <WorkoutInfo>
                <WorkoutTitle>...</WorkoutTitle>
                <MuscleScroll horizontal={true}>

                </MuscleScroll>


            </WorkoutInfo>

            <WorkoutActions>
                <WorkoutButton>
                    <WorkoutButtonImage/>
                </WorkoutButton>


            </WorkoutActions>

        </Workout>

    );
}