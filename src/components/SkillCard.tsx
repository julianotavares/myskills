import React from 'react'
import {TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from 'react-native'

interface SkillsCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillsCardProps) {
  return(
    <TouchableOpacity style={styles.buttonSkill}
      {...rest}
    >
    <Text style={styles.textSkill}>
      {skill}
    </Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
