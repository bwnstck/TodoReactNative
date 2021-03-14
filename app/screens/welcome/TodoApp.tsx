import React, { useState } from "react"
import {
  View,
  ViewStyle,
  TextStyle,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { observer } from "mobx-react-lite"
import { Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import Task from "../../components/task/Task"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"


export const TodoApp = observer(function WelcomeScreen() {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  interface todoItem {
    txt: string,
    done: boolean,
    date: DateConstructor
  }
  const handleSubmit = () => {
    if (todo) setTodoList([...todoList, {
      txt: todo,
      done: false,
      date: Date.now()
    }])
    console.log(todoList)
    setTodo("")
  }
  const handleDelete = (todo: string) => {
    const newTodos = todoList.filter(item => todo !== item)
    setTodoList(newTodos)
    console.log("delete: ", todo)
  }
  const handleDone = (item: todoItem) => {
    const updateList = todoList.filter(todoItem => {
      if (todoItem.date === item.date) {
        todoItem.done = !todoItem.done
        return todoItem
      }
      return todoItem
    }
    )
    setTodoList(updateList)
  }
  return (
    <View testID="WelcomeScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header headerTx="welcomeScreen.poweredBy" style={HEADER} titleStyle={HEADER_TITLE} />
        <View style={TASKWRAPPER}>
          <Text style={SECTIONTITLE}>Todo List</Text>
          <View style={ITEMS}>
            {todoList.sort((a, b) => a.date - b.date).sort((a, b) => a.done - b.done).map(todoItem =>
              <TouchableOpacity key={todoItem.date} onPress={() => handleDone(todoItem)}>

                <Task todo={todoItem} handleDelete={handleDelete} />
              </TouchableOpacity>

            )}
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding " : "height"}
          style={WRITETASKWRAPPER}
        >
          <TextInput style={INPUT} placeholder={"Write a task"} value={todo} onChangeText={text => setTodo(text)} />
          <TouchableOpacity onPress={() => handleSubmit()}>
            <View style={ADDWRAPPER}>
              <Text style={ADDTEXT}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Screen>
    </View>
  )
})
const ADDWRAPPER: TextStyle = {
  backgroundColor: "#fc0",
  width: 50,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 60,
  borderWidth: 2,
  borderColor: "black"
}
const ADDTEXT: TextStyle = {
  color: "black",
  fontSize: 30,
}


const WRITETASKWRAPPER: TextStyle = {
  position: "absolute",
  bottom: 60,
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center"

}
const INPUT: TextStyle = {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: "white",
  borderRadius: 60,
  borderColor: "#fc0",
  borderWidth: 3,
  width: 250
}

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  paddingHorizontal: spacing[4],
  height: "100%"
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const ITEMS: TextStyle = {
  paddingTop: 20
}
const SECTIONTITLE: TextStyle = {
  fontSize: 40,
}
const TASKWRAPPER: TextStyle = {
  paddingHorizontal: 20,
}