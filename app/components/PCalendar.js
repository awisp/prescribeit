import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Alert } from 'react-native';
import Prescription from './Prescription'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


export default class PCalendar extends React.Component {
    
  constructor(props) {
    super(props)

    this.state = {
      prescriptionName: null,
      prescriptionRefill: null,
      prescriptionRenew: null,
      prescriptions: [],
      visible: false
    }  
  }

  

  addPrescription() {
    this.setState({ visible: true })
  }

  deletePrescription(key) {
    this.state.prescriptions.splice(key, 1)
    this.setState({ prescriptions: this.state.prescriptions })
  }

  handleOK() {
    // if(this.state.prescriptionName == null) this.state.prescriptionName = "Adduduvil";
    this.state.prescriptions.push({
      presName: this.state.prescriptionName,
      nextRefill: this.state.prescriptionRefill,
      nextRenew: this.state.prescriptionRenew
    })

    this.setState({ prescriptionName: null, prescriptions: this.state.prescriptions, visible: false })
  }

  handleCancel() {
    this.setState({ visible: false })
  }

  render() {
    const medicine1 = {key: 'medicine1', color: 'red'};
    const medicine2 = {key: 'medicine2', color: 'blue'};
    const medicine3 = {key: 'medicine3', color: 'green'};
    let prescriptions = this.state.prescriptions.map((val, key) => {
      return <Prescription key={key} keyval={key} val={val} deleteMethod={ () => this.deletePrescription(key) } />
    })

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Prescriptions</Text>
        </View>

        {/* <ScrollView style={styles.scrollContainer}>
          { prescriptions }
        </ScrollView> */}

        <View style={styles.actions}>
        <Calendar
          markingType={'multi-dot'}
          markedDates={{
            '2021-08-02': {dots: [medicine1, medicine3]},
            '2021-08-03': {dots: [medicine2]},
            '2021-08-04': {dots: [medicine1]},
            '2021-08-06': {dots: [medicine1, medicine2]},
            '2021-08-07': {dots: [medicine3]},
            '2021-08-08': {dots: [medicine1]},
            '2021-08-09': {dots: [medicine2]},
            '2021-08-10': {dots: [medicine1]},
            '2021-08-11': { selected: true, selectedColor: 'green' },
            '2021-08-12': {dots: [medicine1, medicine2, medicine3]},
            '2021-08-14': {dots: [medicine1]},
            '2021-08-15': {dots: [medicine2]},
            '2021-08-16': {dots: [medicine1]},
            '2021-08-17': {dots: [medicine3]},
            '2021-08-18': {dots: [medicine1, medicine2]},
            '2021-08-20': {dots: [medicine1]},
            '2021-08-21': {dots: [medicine2]},
            '2021-08-22': {dots: [medicine1, medicine3]},
            '2021-08-24': {dots: [medicine1, medicine2]},
            '2021-08-26': {dots: [medicine1]},
            '2021-08-27': {dots: [medicine2, medicine3]},

            '2021-08-28': {dots: [medicine1]},
            '2021-08-30': {dots: [medicine1, medicine2]},

          }}
        />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingTop: 20,
    marginBottom: 10
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  actions: {
    borderTopWidth: 1,
    padding: 50,
    marginTop: 10
  }
});
