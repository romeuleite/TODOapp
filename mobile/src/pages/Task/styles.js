import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9917b9',
  },
  taskList: {
    marginTop: 32,
  },

  task: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },

  taskProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  taskValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#9917b9',
    fontSize: 15,
    fontWeight: 'bold'
  }
});