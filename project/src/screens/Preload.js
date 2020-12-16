//reset history
import {StackActions, NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';

const Preload = (props) => {


//temporary
    props.navigation.dispatch(StackActions.reset({
        index:0,
        actions:[
            NavigationActions.navigate({routeName:'StarterStack'})
        ]

    }));


    /*
    if(!props.name){
        //get StarterStack
        props.navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'StarterStack'})
            ]

        }));

    }else {
        //get AppTab
        props.navigation.dispatch(StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'AppTab'})
            ]

        }));
    }
    */
    
    return null;
}


const mapStateToProps = (state) => {
    return {
        name:state.userReducer.name

    };
}

export default connect(mapStateToProps)(Preload);