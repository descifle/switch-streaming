import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createStream } from '../../actions'

class StreamCreate extends React.Component{

    renderError = ({ error, touched }) => {
        if(error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render() {
        return (
            <div>
                <form  onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="title" component={this.renderInput} label='Enter Title' />
                    <Field name="description" component={this.renderInput} label='Enter Description' />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validation = (formValues) => {
    const errors = {}
    if(!formValues.title) {
        errors.title = 'You must enter a Title'
    }

    if(!formValues.description) {
        errors.description = 'You must enter a Description'
    }

    return errors
}

const formWrapped = reduxForm({
    form: 'createStream',
    validate: validation
})(StreamCreate)

export default connect(null, { createStream })(formWrapped)