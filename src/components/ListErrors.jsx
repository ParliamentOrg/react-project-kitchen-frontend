import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class ListErrors extends React.Component {
  render() {
    const { errors } = this.props;
    if (errors) {
      return (
        <ul className="error-messages">
          {
            Object.keys(errors).map((key) => (
              <li key={key}>
                {key}
                {' '}
                {errors[key]}
              </li>
            ))
          }
        </ul>
      );
    }
    return null;
  }
}

export default ListErrors;
