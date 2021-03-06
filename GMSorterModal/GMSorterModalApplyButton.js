import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';


export default GMSorterModalApplyButton = (props) => {

    return (
        <TouchableOpacity onPress={() => props.showgmsorterbutton()}
            style={{
                justifyContent: 'center', alignItems: 'center',
                borderTopColor: '#eee', borderTopWidth: .5, height: 60, backgroundColor: 'orange', borderRadius: 1
            }} >

            <View >
                <Text style={{ color: 'white', fontSize: 18 }}>Uygula</Text></View>

        </TouchableOpacity>
    );

}
GMSorterModalApplyButton.propTypes = {
    name: PropTypes.string,
    showgmsorterbutton:PropTypes.func
};