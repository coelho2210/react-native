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


const NextButton = styled.Button``;
const LevelArea =styled.View`
    width:100%;

`;

const BoldText = styled.Text`
    font-weight:bold;

`;

const Page =  (props)  => {

    let funnyPhrase = '';
    switch(props.workoutDays.length){
        case 1:
            funnyPhrase = "Just 1?? Chicken boy!!";
            break;
        case 2:
            funnyPhrase = "2 days is not enough";
            break;
        case 3:
            funnyPhrase = "3 days it's a good start"; 
            break;
        case 4:
            funnyPhrase = "4 days its a good improvement";
            break; 
        case 5:
            funnyPhrase = "5 days is cool!! Keep doing it"
            break;
        case 6:
            funnyPhrase = "6 dayss?!!?! You are crazy dude!!"
            break;
        case 7:
            funnyPhrase = "WoooW!! 7 days?!  You are a BODYBUILDER!!"
            break; 
    }


    const setMyLevel = (l) => {
        props.setLevel(l);
        props.navigation.setParams({level:l});
    }




    return(
        <Container>
           <HeaderText>{funnyPhrase}</HeaderText>
           <HeaderText><BoldText>What is you level today ?</BoldText></HeaderText>


           <LevelArea>
               <DefaultButton bgcolor={props.level=='beginner'?'#A5E8BC':false} onPress={() =>setMyLevel('beginner')}   style={{marginBottom:20}} underlayColor="#CCC" >
                   <Text>Beginner / Chicken Legs LOL </Text>
               </DefaultButton>
               <DefaultButton bgcolor={props.level=='intermediate'?'#A5E8BC':false} onPress={() =>setMyLevel('intermediate')}   style={{marginBottom:20}} underlayColor="#CCC">
                   <Text> Intermediate / Doing well</Text>
               </DefaultButton>
               <DefaultButton bgcolor={props.level=='advanced'?'#A5E8BC':false}  onPress={() =>setMyLevel('advanced')}   style={{marginBottom:20}} underlayColor="#CCC">
                   <Text>Advanced / BodyBuilder</Text>
               </DefaultButton>

           </LevelArea>


        </Container>

    );
}

Page.navigationOptions =  ({ navigation}) => {

    const nextAction = () => {
        if(!navigation.state.params || !navigation.state.params.level){
            alert("You need add a level!");
            return
        }

        navigation.navigate('StarterRecommendations');

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
        level:state.userReducer.level,
        workoutDays:state.userReducer.workoutDays

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        setLevel:(level)=>dispatch({type:'SET_LEVEL',payload:{level}})

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);