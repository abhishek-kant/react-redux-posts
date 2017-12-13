import React from 'react'
import {reduxForm, Field} from 'redux-form'
import { connect } from 'react-redux'
import {createPost} from '../../actions'
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


  onSubmit(formData){
    this.props.createPost(formData)
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
        validate={required}
      />
      <br />

      <Field
        name="content"
        component={TextField}
        floatingLabelText="Post content"
        validate={required}
      />
      <br />

      <RaisedButton type='submit' disabled={this.props.submitting}  label="Primary" primary={true}  />
    </form>
  )}
}

export default reduxForm({
  form: "PostNewForm"
})(
  connect(null, {createPost})(PostNew)
)
