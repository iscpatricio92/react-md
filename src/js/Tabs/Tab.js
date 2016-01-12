import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

export default class Tab extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    label: PropTypes.string,
    valueLink: PropTypes.shape({
      checked: PropTypes.bool.isRequired,
      requestChange: PropTypes.func.isRequired,
    }),
    className: PropTypes.string,
    icon: PropTypes.node,
  };

  render() {
    const { label, icon, className, valueLink, ...props } = this.props;
    return (
      <li
        className={classnames('md-tab', className, {
          'active': valueLink.checked,
          'wrapped': label.length > 33,
          'with-icon': label && icon,
        })}
        {...props}
        >
        <label className="md-tab-label">
          {icon}
          {label}
          <input type="radio" className="md-tab-radio" name="md-tabs" valueLink={valueLink} />
        </label>
      </li>
    );
  }
}
