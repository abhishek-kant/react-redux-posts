import React from 'react'
import {reduxForm, Field} from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {createPost} from '../../actions'
import './posts.css'

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
    this.props.createPost(formData, () => {
      this.props.history.push('/')
    })
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

      <RaisedButton className='form-buttons' type='submit' disabled={this.props.submitting}  label="Primary" primary={true}  />
      <Link className='form-buttons' to='/'><RaisedButton label="Default"  label="Cancel" /></Link>
    </form>
  )}
}

export default reduxForm({
  form: "PostNewForm"
})(
  connect(null, {createPost})(PostNew)
)
