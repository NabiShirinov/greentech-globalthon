import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default Logout_Alert = ({ title, message, onCancel, onConfirm }) => {
    return (
      <View style={styles.container}>
        <View style={styles.alert}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={onCancel} style={[styles.button, styles.cancelButton]}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={[styles.button, styles.confirmButton]}>
              <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    alertContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alert: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: '80%',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    message: {
      fontSize: 16,
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: 'row',
    },
    button: {
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 10,
    },
    cancelButton: {
      backgroundColor: 'gray',
    },
    confirmButton: {
      backgroundColor: 'red',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'white',
    },
    itemSvg: {
      width: 30,
      height: 30,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
    },
    itemName: {
      flex: 1,
      fontSize: 16,
    },
    navSvg: {
      marginLeft: 'auto',
    },
  });
  