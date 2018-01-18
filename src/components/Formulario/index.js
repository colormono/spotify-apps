import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendContactForm } from '../../actions/contactForm';

class Formulario extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.sendContactForm(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        Formulario
        <Field name="title" label="Title" component={this.renderField} />
        <Field name="content" label="Content" component={this.renderField} />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <button type="submit" className="btn">
          Enviar
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

function validateForm(values) {
  const errors = {};

  // Validate inputs from 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters!';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories.';
  }

  if (!values.content) {
    errors.content = 'Enter some content please.';
  }

  // if errors is empty, the form is fine to submit
  // if errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  form: 'ContactForm',
  validate: validateForm
})(
  connect(null, { sendContactForm })(Formulario)
);
