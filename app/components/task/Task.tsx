import React, { useState } from 'react'
import { TextStyle, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../text/text'

const Task = ({ todo, handleDelete }) => {
    const [marked, setMarked] = useState(false);
    let count
    function startCountdown() {
        count = setTimeout(() => { setMarked(false); stopCountdown() }, 2000);
    }

    function stopCountdown() {
        clearTimeout(count);
    }

    const markAndDelete = () => {
        if (marked) handleDelete(todo)
        setMarked(!marked)
        startCountdown()
        console.log("marked: ", todo)
    }

    return (
        <View style={ITEM}>
            <View style={ITEMLEFT}>
                <View style={todo.done ? SQUAREFULL : SQUARE}></View>

                <Text style={todo.done ? ITEMDONE : ITEMTEXT}>{todo.txt}</Text>
            </View>
            <TouchableOpacity onPress={markAndDelete}>

                <View style={marked ? CIRCULARFULL : CIRCULAR} />
            </TouchableOpacity>


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
const SQUAREFULL: TextStyle = {
    width: 24,
    height: 24,
    backgroundColor: "green",
    opacity: 0.6,
    borderRadius: 5,
    marginRight: 15
}
const ITEMTEXT: TextStyle = {
    color: "black",
    maxWidth: "80%",
    fontWeight: "bold"
}
const ITEMDONE: TextStyle = {
    color: "rgba(0,0,0,.5)",
    fontWeight: "400",
    maxWidth: "80%"
}
const CIRCULAR: TextStyle = {
    width: 20,
    height: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 50,

}
const CIRCULARFULL: TextStyle = {
    width: 25,
    height: 25,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: "red"
}
export default Task
