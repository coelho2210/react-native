import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import DefaultButton from '../components/DefaultButton';
import { Header } from 'react-native/Libraries/NewAppScreen';


const Container        =   styled.SafeAreaView`
    flex:1;
    align-items:center;
    margin-left:30px;
    margin-right:30px;
    margin-top:50px;
`;


const HeaderText =styled.Text`

    font-size:15px;
    color:#333;
    text-align:center;
    margin-bottom:30px;
`;


const NextButton = styled.Button`


`;

const BoldText = styled.Text`
    font-weight:bold;
`;

const DaysArea =styled.View`
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;

`;

const Page =  (props)  => {

    const toggleDay = (d) => {

        let newWorkoutDays = [...props.workoutDays];
        if(!props.workoutDays.includes(d)) {
            // add
            newWorkoutDays.push(d);

        }else {
            newWorkoutDays = newWorkoutDays.filter(i=>i!=d);

        }

        props.setWorkoutDays(newWorkoutDays);
        props.navigation.setParams({workoutDays:newWorkoutDays});

    }

    let firtName = props.name.split(' ') [0];

    return(
        <Container>
           <HeaderText>Hey, <BoldText>{firtName}</BoldText>. What's up?</HeaderText>
           <HeaderText>What <BoldText>days</BoldText> do you wanna workout?</HeaderText>


           <DaysArea>
               <DefaultButton bgcolor={props.workoutDays.includes(1)?'#A5E8BC' :false} onPress={() =>toggleDay(1)}  width={115} style={{marginBottom:20}} underlayColor="#CCC" >
                   <Text>Monday</Text>
               </DefaultButton>
               <DefaultButton bgcolor={props.workoutDays.includes(2)?'#A5E8BC' :false} onPress={() =>toggleDay(2)}  width={115} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Tuesday</Text>
               </DefaultButton>
               <DefaultButton bgcolor={props.workoutDays.includes(3)?'#A5E8BC' :false}  onPress={() =>toggleDay(3)}  width={120} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Wednesday</Text>
               </DefaultButton>
               <DefaultButton  bgcolor={props.workoutDays.includes(4)? '#A5E8BC' :false} onPress={() =>toggleDay(4)}  width={115} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Thursday</Text>
               </DefaultButton>
               <DefaultButton bgcolor={props.workoutDays.includes(5)?'#A5E8BC':false} onPress={() =>toggleDay(5)}  width={115} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Friday</Text>
               </DefaultButton>
               <DefaultButton bgcolor={props.workoutDays.includes(6)?'#A5E8BC' :false} onPress={() =>toggleDay(6)}  width={115} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Saturday</Text>
               </DefaultButton>
               <DefaultButton  bgcolor={props.workoutDays.includes(0)?'#A5E8BC' :false} onPress={() =>toggleDay(0)} width={115} style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Sunday</Text>
               </DefaultButton>

           </DaysArea>


        </Container>

    );
}

Page.navigationOptions =  ({ navigation}) => {

    const nextAction = () => {
        if(!navigation.state.params || !navigation.state.params.workoutDays.length){
            alert("You need workout at least 1 day, dude!");
            return
        }

        navigation.navigate('StarterNivel');

    }


    return {
        title:'',
        headerRight:<NextButton  title="Next" onPress={nextAction}  />,
        headerRightContainerStyle:{
            marginRight:10

        }

    }
}

const mapStateToProps = (state) => {
    return {
        name:state.userReducer.name,
        workoutDays:state.userReducer.workoutDays

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name)=>dispatch({type:'SET_NAME',payload:{name}}),
        setWorkoutDays:(workoutDays)=>dispatch({type:'SET_WORKOUTDAYS',payload:{workoutDays}})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);