import React from "react";
import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  return (
    // <ColorContext.Consumer>
    //   {(value) => (
    //     <div
    //       style={{
    //         width: "64px",
    //         height: "64px",
    //         background: value.color,
    //       }}
    //     />
    //   )}
    // </ColorContext.Consumer>

    <ColorConsumer>
      {/*   { (value) => (     */}
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              //   background: value.state.color,
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              //   background: value.state.subcolor,
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
