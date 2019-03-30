import React from 'react';
import PropTypes from 'prop-types';
import * as typeformEmbed from '@typeform/embed';
import './typeForm.css';

class TypeForm extends React.Component {
  static propTypes = {
    formDataUrl: PropTypes.string.isRequired,
    hideHeaders: PropTypes.bool,
    hideFooter: PropTypes.bool,
    opacity: PropTypes.number,
    buttonText: PropTypes.string,
    onSubmit: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.tfContainerRef = React.createRef();
  }

  componentDidMount() {
    const {
      formDataUrl,
      hideHeaders,
      hideFooter,
      opacity,
      buttonText,
      onSubmit
    } = this.props;

    const options = {
      hideHeaders,
      hideFooter,
      opacity,
      buttonText,
      onSubmit
    };
    if (this.tfContainerRef) {
      typeformEmbed.makeWidget(
        this.tfContainerRef.current,
        formDataUrl,
        options
      );
    }
  }

  render() {
    return <div className="type-form" ref={this.tfContainerRef} />;
  }
}

export default TypeForm;
