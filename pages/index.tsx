import React from "react";
import { NextPage } from "next";
import { connect } from "react-redux";

// @ts-ignore
const mapStateToProps = state => ({ id: state.id });

type Props = ReturnType<typeof mapStateToProps>;

const Index: NextPage<Props> = props => {
  return (
    <React.Fragment>
      <h1>Hello world. {props.id && `ID: ${props.id}`}</h1>
    </React.Fragment>
  );
};

export default connect(mapStateToProps)(Index);
