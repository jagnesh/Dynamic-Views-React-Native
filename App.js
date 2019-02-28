import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button } from './Button'
import FormView from './FormView';



export default class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      formInput: [],
      savedFormData: []
    }
  }
  setFormsData = (key, data) => {
    console.log(`callback : ${key} => ${JSON.stringify(data)}`)
    let savedFormData = [...this.state.savedFormData]
    savedFormData[key] = data
    this.setState({ savedFormData: savedFormData })
  }

  addNewForm = (key) => {
    let formInput = this.state.formInput;
    formInput.push(
      <FormView
        key={key}
        formNo={key}
        callback={this.setFormsData.bind(this)} />
    );
    this.setState({ formInput })
  }

  showFormData = () => {
    alert(JSON.stringify(this.state.savedFormData))
  }
  render() {

    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={style.titleStyle}>Test</Text>
          <Button onPress={() => this.addNewForm(this.state.formInput.length)} >+</Button>
        </View>
        {this.state.formInput.map((value, index) => {
          return value
        })}

        {(this.state.formInput.length > 0) ? <Button onPress={() => this.showFormData()} >Submit</Button> : null}

      </ScrollView>
    )
  }
}
const style = {
  titleStyle: {
    fontSize: 20,
    padding: 10,
    flex: 1,
    fontWeight: 'bold'
  }
}
