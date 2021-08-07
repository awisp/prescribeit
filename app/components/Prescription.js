import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Prescription extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.meeting}>
        <Text style={styles.meetingText}>{this.props.val.presName.toString()}</Text>
        <Text style={styles.meetingText}>Next refill date: {this.props.val.nextRefill.toString()}</Text>
        <Text style={styles.meetingText}>Next renew date: {this.props.val.nextRenew.toString()}</Text>


        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.deleteMeeting}>
          <Text style={styles.deleteMeetingText}>Refill</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  meeting: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd'
  },
  meetingText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#ccc'
  },
  deleteMeeting: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  deleteMeetingText: {
    color: 'white'
  }
});