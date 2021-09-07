import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity
 } from 'react-native'
import {Button} from '../components/Button';

export function Home() {
    const [newSkill, setNewSkill] = useState();
    const [mySkills, setMySkills] = useState([]);

    function handleAddNewSkill() {
      setMySkills(oldState => [...oldState, newSkill]);
    }

  return (
    <>
      <SafeAreaView style={styles.container}>

        <Text
          style={styles.title}
          >Welcome, Tavares
        </Text>
        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor='#555'
          onChangeText={setNewSkill}
          />

          <Button />

          <Text
           style={[styles.title, { marginVertical: 20}]}
          >
            My Skills
          </Text>

          {
            mySkills.map(skill => (

            <TouchableOpacity key={skill} style={styles.buttonSkill}>
              <Text style={styles.textSkill}>
                {skill}
              </Text>
            </TouchableOpacity>
            ))
          }

      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 250,
    alignItems: 'center',
    marginVertical: 10
  },

  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',

  }
})
