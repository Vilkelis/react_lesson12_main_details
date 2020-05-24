import React from 'react';
import PropTypes from 'prop-types';
 
function Alert(props) {
  const {text, kind, handleRetry} = props;

  if (text) {
    return (
      <div className={'alert alert-' + kind} 
           role="alert">
        {text}
        {handleRetry && <button className="mr-10 btn btn-danger" onClick={handleRetry}>
					Повторить
				</button>}
      </div>
    );
  } else {
    return null;
  }
}

Alert.defaultProps = {
  kind: 'primary'
}

Alert.propTypes = {
  text: PropTypes.string,
  kind: PropTypes.string,
  handleRetry: PropTypes.func 
}

export default Alert;