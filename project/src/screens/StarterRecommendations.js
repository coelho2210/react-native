import React, {useEffect} from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
// import DefaultButton from '../components/DefaultButton';
import workoutJson from '../presetWorkouts.json';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Workout from '../components/Workout';




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


const NextButton = styled.Button``;

const WorkoutList = styled.FlatList`
    width:100%;

`;

const Page =  (props)  => {

    useEffect(()=>{

        props.navigation.setParams({myWorkouts:props.myWorkouts});
    }, [props.myWorkouts]);

    

    return(
        <Container>
           <HeaderText>Trainning Options!!</HeaderText>
           <HeaderText>You just added your  {props.myWorkouts.length} Trainning</HeaderText>
           
           
           <WorkoutList
            data = {workoutJson}
            renderItem ={({item})=><Workout  data={item}  />}
            keyExtractor={item=>item.id}
           
           
           
           
           />





        </Container>

    );
}

Page.navigationOptions =  ({ navigation}) => {

    let btnNext = 'Ignore';
    if(navigation.state.params && navigation.state.params.myWorkouts.length > 0) {
        btnNext = 'Conclude';

    }



    const nextAction = () => {
        // if(!navigation.state.params || !navigation.state.params.level){
        //     alert("You need add a level!");
        //     return
        // }

        // navigation.navigate('StarteRecommendations');

    }


    return {
        title:'',
        headerRight:<NextButton  title= {btnNext} onPress={nextAction}  />,
        headerRightContainerStyle:{
            marginRight:10

        }

    }
}

const mapStateToProps = (state) => {
    return {
        myWorkouts:state.userReducer.myWorkouts

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        setLevel:(level)=>dispatch({type:'SET_LEVEL',payload:{level}})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);