import React from 'react';
import PropTypes from 'prop-types';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import { View,Text } from 'react-native';




export default GMStars = (props) => {
    
        return (
            <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center' }}>
                {Array.apply(null, Array(5)).map( (item, i) => {
                    return (
                        <FoundationIcon name="star" size={20} color={i <props.stars ? "orange" : "gray"} style={{ marginRight: 3 }} />
                    );
                }, this)}
                <Text style={{ color: '#ccc', fontSize: 14, margin: 5 }}>({props.comments})</Text>
            </View>
        ); 
    
}
GMStars.propTypes = {
    stars: PropTypes.number,
    comments: PropTypes.number,
    color:PropTypes.string
};
