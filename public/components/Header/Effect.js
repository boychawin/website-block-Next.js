import React, { Component } from "react";

export default class Effect1 extends Component {
  state = {
    texts: ["Boychawin.com}", "{Boychawin.com}"],
    text: "",
    step: 0,
    typed: true,
    delay: 100,
    nextText: "",
  };

  TIMEOUT;

  componentDidMount() {
    // console.log('cDM');
    const data = Object.assign({}, this.state);

    this.defaultHandler(data);
  }

  componentDidUpdate() {
    // console.log('cDU');
    const data = Object.assign({}, this.state);

    window.clearTimeout(this.TIMEOUT);

    this.defaultHandler(data);
  }

  defaultHandler = (data) => {
    // console.log('dH');
    const { texts, text, step, typed } = data;

    // stop at end of texts, & backspace mode
    if (texts.length - 1 === step && !typed) {
      return false;
    }

    if (typed) {
      this.typedHandler(data);
    }
    if (!typed) {
      this.backspaceHandler(data);
    }
  };

  typedHandler = (data) => {
    // console.log('tH', data);
    const { texts, step, typed, delay } = data;
    let { text, nextText } = data;

    // text : always take 1text start from text.length
    text = text + texts[step].slice(text.length, text.length + 1);
    // nextText : take text.length+1
    nextText = texts[step].slice(text.length + 1);

    const eachEndOfTyped = texts[step] == text;

    if (text) {
      this.TIMEOUT = setTimeout(() => {
        this.setState({
          text,
          nextText,
          delay: 32 + Math.round(Math.random() * (eachEndOfTyped ? 2500 : 100)),
          typed: eachEndOfTyped ? !typed : typed,
        });
      }, delay);
    }
  };

  backspaceHandler = (data) => {
    // console.log('bH', data);
    const { delay, typed, step, texts } = data;
    let { text, nextText } = data;

    text = text.slice(0, -1);

    const similarText = texts[step]
      .split(" ")
      .filter((a, idx) => a == texts[step + 1].split(" ")[idx])
      .join(" ");
    if (similarText == text) {
      // console.log(similarText, text);
      this.setState({
        typed: !typed,
        step: step + 1,
        text: similarText,
      });
    }

    const switchMode = text ? typed : !typed;
    const noTextLeft = !text ? step + 1 : step;

    this.TIMEOUT = setTimeout(() => {
      this.setState({
        text,
        delay: 32 + Math.round(Math.random() * 40),
        typed: switchMode,
        step: noTextLeft,
      });
    }, delay);
  };

  render() {
    const { text } = Object.assign({}, this.state);
    return (
      <>
        <font className="boychawin1">
          {text}
          <span className="blinking-cursor">|</span>
        </font>
      </>
    );
  }
}
