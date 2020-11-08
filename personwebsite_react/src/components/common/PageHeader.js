import React from "react";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.title;
    return (
      <header className="header">
        <div className="page-header">{title}</div>
      </header>
    );
  }
}

export default PageHeader;
