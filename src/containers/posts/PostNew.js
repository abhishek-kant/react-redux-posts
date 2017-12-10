import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  DatePicker
} from 'redux-form-material-ui'


import RaisedButton from 'material-ui/RaisedButton';

const required = (value) => (value == null ? 'Required' : undefined)
 class PostNew extends React.Component{


  onSubmit(){

  }

  onClick(){
    this.refs.form.submit();
  }

  render(){ return(
    <form ref='form' onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
      <Field
        name="title"
        component={TextField}
        floatingLabelText="Title"
        validate={required}
      />
      <br />

      <Field
        name="categories"
        component={TextField}
        floatingLabelText="Categories"
      />
      <br />

      <Field
        name="content"
        component={TextField}
        floatingLabelText="Post content"
      />
      <br />
      <RaisedButton onClick={this.onClick.bind(this)} label="Primary" primary={true}  />
    </form>
  )}
}

export default reduxForm({
  form: "PostNewForm"
})(PostNew)
