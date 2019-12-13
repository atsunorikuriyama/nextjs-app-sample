import React from "react";
import { Provider } from "react-redux";
import { compose } from "redux";
import withRedux from "next-redux-wrapper";
import App from "next/app";
import qs from "query-string";
import store from "../store";
import { SET_ID } from "../reducer";

// pagesのルートとなるComponent
// @ts-ignore
class MyApp extends App {
  // @ts-ignore
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return pageProps;
  }

  componentDidMount() {
    // ここでURLをパースしてクエリ取得する形にしています
    const { search } = location;
    const parsed = qs.parse(search);
    const { id } = parsed;

    // クエリが乗っかってる場合は適宜こちらでfetchしたりstateいじったり
    if (id) {
      store.dispatch({
        type: SET_ID,
        id
      });
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    );
  }
}

export default compose(withRedux(() => store))(MyApp);
