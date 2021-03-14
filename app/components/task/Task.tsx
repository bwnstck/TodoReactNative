import React from 'react'
import { TextStyle, View } from 'react-native'
import { Text } from '../text/text'

const Task = ({ text }) => {
    return (
        <View style={ITEM}>
            <View style={ITEMLEFT}>
                <View style={SQUARE}></View>
                <Text style={ITEMTEXT}>{text}</Text>
            </View>
            <View style={CIRCULAR}></View>

        </View>
    )
}

const ITEM: TextStyle = {
    backgroundColor: "#fc0",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

}
const ITEMLEFT: TextStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap"
}
const SQUARE: TextStyle = {
    width: 24,
    height: 24,
    backgroundColor: "white",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15
}
const ITEMTEXT: TextStyle = {
    color: "black",
    maxWidth: "80%"
}
const CIRCULAR: TextStyle = {
    width: 12,
    height: 12,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,

}
export default Task
