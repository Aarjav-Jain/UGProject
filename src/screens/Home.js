import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Card from '../components/Home/Card';
import {icons} from '../constants';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card imagePath={icons.calculator} />
        <Card imagePath={icons.calculator} />
        <Card imagePath={icons.calculator} />
        <Card imagePath={icons.calculator} />
        <Card imagePath={icons.calculator} />
        <Card imagePath={icons.calculator} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    rowGap: 40,
    paddingTop: 40,
  },
});
