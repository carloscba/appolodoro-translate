import React, {Component} from 'react'
import PropTypes from 'prop-types';

class AppolodoroTranslate extends Component{

  render() {
    const content = this.props.children.filter(item => item.ref == this.props.locale)
    return <div>{content}</div>
  }
}

AppolodoroTranslate.propTypes = {
  locale : PropTypes.string.isRequired
};

AppolodoroTranslate.defaultProps = {
  locale : 'en'
};

export default AppolodoroTranslate;