import { Component, PropTypes } from 'react';

export default function() {
  return React.createClass({
    // static propTypes = {}
    componentWillMount() {
    },

    render() {
        return (
          <div data-page="index" className={this.props.class}>
            {/* Scrollable page content*/}
            {/*{React.cloneElement(this.props.children, {user: this.props.user(), auth: this.props.auth()})}*/}
            {/*{this.props.children}*/}
            {React.cloneElement(this.props.children)}
          </div>
        );
    }
  })
}
