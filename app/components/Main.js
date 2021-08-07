import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Alert } from 'react-native';
import Prescription from './Prescription'
import Dialog from "react-native-dialog";


export default class Main extends React.Component {
    
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

    let prescriptions = this.state.prescriptions.map((val, key) => {
      return <Prescription key={key} keyval={key} val={val} deleteMethod={ () => this.deletePrescription(key) } />
    })

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Prescriptions</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          { prescriptions }
        </ScrollView>

        <View style={styles.actions}>
          <Button
            onPress={
                () => this.addPrescription()
            }
            title={ 'Add Prescription' }>
          </Button>
          <Dialog.Container visible={this.state.visible}>
            <Dialog.Title>Add Prescription</Dialog.Title>
            {/* <Dialog.Description>
                Do you want to delete this account? You cannot undo this action.
            </Dialog.Description> */}

            <Dialog.Input label="Enter name of medication" 
                onChangeText={(nm) => 
                    this.setState({ prescriptionName: nm })}/>

            <Dialog.Input label="Enter next date of refill" 
                onChangeText={(rf) => 
                    this.setState({ prescriptionRefill: rf })}/>

            <Dialog.Input label="Enter next date of renewal" 
                onChangeText={(rn) => 
                    this.setState({ prescriptionRenew: rn })}/>

            <Dialog.Button label="Cancel" onPress={() => this.handleCancel()} />
            <Dialog.Button label="OK" onPress={() => this.handleOK()} />
            </Dialog.Container>
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
