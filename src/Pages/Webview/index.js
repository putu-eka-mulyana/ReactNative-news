import React from 'react';
import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import Animated from 'react-native-reanimated';
import {ProgressBar} from '@react-native-community/progress-bar-android';
const jsCode =
  'document.querySelectorAll("iframe").setAttribute("sandbox", "allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation");';
class WebViewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countProgress: 0,
      showProgress: false,
    };
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#120e0e');
  }
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.page}>
        {this.state.showProgress && (
          <ProgressBar
            style={styles.progressBar}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={this.state.countProgress}
          />
        )}
        <WebView
          onLoadStart={() => this.setState({showProgress: true})}
          onLoadEnd={() => this.setState({showProgress: false})}
          injectedJavascript={jsCode}
          source={{
            uri: 'https://luwuktimes.com/',
          }}
          allowsInlineMediaPlayback={true}
          onLoadProgress={({nativeEvent}) => {
            this.setState({countProgress: nativeEvent.progress});
          }}
          onHttpError={(syntheticEvent) => {
            navigation.replace('Error');
          }}
          onError={(syntheticEvent) => {
            navigation.replace('Error');
          }}
        />
      </SafeAreaView>
    );
  }
}

export default WebViewApp;

const styles = StyleSheet.create({
  page: {flex: 1},
  progressBar: {marginVertical: -6},
});
