import React from "react"
import {
  View,
  ViewStyle,
  TextStyle,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"
import Task from "../../components/task/Task"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
const bowserLogo = require("./bowser.png")

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
  fontSize: 24,
}
const TASKWRAPPER: TextStyle = {
  paddingTop: 80,
  paddingHorizontal: 20,
}
export const WelcomeScreen = observer(function WelcomeScreen() {
  return (
    <View testID="WelcomeScreen" style={FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Header headerTx="welcomeScreen.poweredBy" style={HEADER} titleStyle={HEADER_TITLE} />
        <View style={TASKWRAPPER}>
          <Text style={SECTIONTITLE}>Todazs tasks</Text>
          <View style={ITEMS}>{/* Todo Tasks */}
            <Task text={"wuuuuhhh"} />
            <Task text={"waaah"} />
            <Task text={"wuuuuhhh"} />
            <Task text={"waaah"} />
          </View>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding " : "height"}
          style={WRITETASKWRAPPER}
        >
          <TextInput style={INPUT} placeholder={"Write a task"} />
          <TouchableOpacity>
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