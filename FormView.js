import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Input from './Input';

export default class FormView extends Component {
    state = {
        emailText: '',
        emailError: true,
        nameText: '',
        nameError: true,
        contactText: '',
        contactError: true,
        websiteText: '',
        websiteError: true,
        dobText: '',
        dobError: true,
    }
    getData = () => {
        setInterval(() => null, 200)
        let data = {}
        data.email = this.state.emailText
        data.name = this.state.nameText
        data.contact = this.state.contactText
        data.website = this.state.websiteText
        data.dob = this.state.dobText
        data.error = (this.state.emailError === true || this.state.contactError === true || this.state.dobError === true || this.state.nameError === true || this.state.websiteError === true) ? true : false
        return data
    }
    handleEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({ emailText: text, emailError: true })
        } else {
            this.setState({ emailText: text, emailError: false }, () => this.props.callback(this.props.formNo, this.getData()))
        }

    }
    handleName = (text) => {
        let reg = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/
        if (reg.test(text) === false) {
            this.setState({ nameText: text, nameError: true })
        } else {
            this.setState({ nameText: text, nameError: false }, () => this.props.callback(this.props.formNo, this.getData()))
        }
    }

    handleContact = (text) => {
        let reg = /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/
        if (reg.test(text) === false) {
            this.setState({ contactText: text, contactError: true })
        } else {
            this.setState({ contactText: text, contactError: false }, () => this.props.callback(this.props.formNo, this.getData()))
        }
    }

    handleWebsite = (text) => {
        let reg = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
        if (reg.test(text) === false) {
            this.setState({ websiteText: text, websiteError: true })
        } else {
            this.setState({ websiteText: text, websiteError: false }, () => this.props.callback(this.props.formNo, this.getData()))
        }
    }
    handledob = (text) => {
        let reg = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        if (reg.test(text) === false) {
            console.log('if')
            this.setState({ dobText: text, dobError: true })
        } else {
            console.log('else')
            this.setState({ dobText: text, dobError: false }, () => this.props.callback(this.props.formNo, this.getData()))

        }
    }
    render() {
        return (
            <View style={style.container}>
                <Text style={style.formTitle}>Form: {this.props.formNo + 1}</Text>
                <Input
                    placeholder='Full Name'
                    onChangeText={val => this.handleName(val)}
                    value={this.state.nameText}
                    error={this.state.nameError}
                />
                <Input
                    placeholder='Email'
                    onChangeText={val => this.handleEmail(val)}
                    value={this.state.emailText}
                    error={this.state.emailError}
                    keyboardType='email-address'
                />
                <Input
                    placeholder='Contact'
                    onChangeText={val => this.handleContact(val)}
                    value={this.state.contactText}
                    keyboardType='number-pad'
                    error={this.state.contactError}
                />
                <Input
                    placeholder='DOB (dd/mm/yyyy)'
                    onChangeText={val => this.handledob(val)}
                    value={this.state.dobText}
                    error={this.state.dobError}
                />
                <Input
                    placeholder='Website'
                    onChangeText={val => this.handleWebsite(val)}
                    value={this.state.websiteText}
                    error={this.state.websiteError}
                    keyboardType='url'
                />

            </View>

        )
    }
}
const style = {
    container: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        margin: 5,
        padding: 5
    },
    formTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 5
    }
}