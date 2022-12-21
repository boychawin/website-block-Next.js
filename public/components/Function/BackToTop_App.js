import React, { Component } from "react";

export default class BackToTop_App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className="scroll-to-top ">
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <a className="center font-20 plr-10 btn-fill-back-to-top">
              <i className=" fas fa-angle-up" />
            </a>
          </div>
        )}
      </div>
    );
  }
}
