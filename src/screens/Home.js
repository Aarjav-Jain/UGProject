import {View, StyleSheet, ScrollView} from 'react-native';
import Card from '../components/Home/Card';
import {icons, NAVIGATIONS} from '../constants';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card
          imagePath={icons.calculator}
          navigationPath={NAVIGATIONS.POWDER_FACTOR.name}
          text={NAVIGATIONS.POWDER_FACTOR.title.toUpperCase()}
        />
        <Card
          imagePath={icons.detonator}
          navigationPath={NAVIGATIONS.DETONATION_FACTOR.name}
          text={NAVIGATIONS.DETONATION_FACTOR.title.toUpperCase()}
        />
        <Card
          imagePath={icons.energy}
          navigationPath={NAVIGATIONS.ENERGY_FACTOR.name}
          text={NAVIGATIONS.ENERGY_FACTOR.title.toUpperCase()}
        />
        <Card
          imagePath={icons.blastlength}
          navigationPath={NAVIGATIONS.BLAST_HOLE_LENGTH.name}
          text={NAVIGATIONS.BLAST_HOLE_LENGTH.title.toUpperCase()}
        />
        <Card
          imagePath={icons.pressure}
          navigationPath={NAVIGATIONS.DETONATION_PRESSURE.name}
          text={NAVIGATIONS.DETONATION_PRESSURE.title.toUpperCase()}
        />
        <Card
          imagePath={icons.density}
          navigationPath={NAVIGATIONS.LOADING_DENSITY.name}
          text={NAVIGATIONS.LOADING_DENSITY.title.toUpperCase()}
        />
        {/* ////////////// */}
        <Card
          imagePath={icons.diameter}
          navigationPath={NAVIGATIONS.BLAST_HOLE_DIAMETER.name}
          text={NAVIGATIONS.BLAST_HOLE_DIAMETER.title.toUpperCase()}
        />
        <Card
          imagePath={icons.burden}
          navigationPath={NAVIGATIONS.BURDEN.name}
          text={NAVIGATIONS.BURDEN.title.toUpperCase()}
        />
        <Card
          imagePath={icons.spacing}
          navigationPath={NAVIGATIONS.SPACING.name}
          text={NAVIGATIONS.SPACING.title.toUpperCase()}
        />
        <Card
          imagePath={icons.stemming}
          navigationPath={NAVIGATIONS.LOADING_DENSITY.name}
          text={NAVIGATIONS.LOADING_DENSITY.title.toUpperCase()}
        />
        <Card
          imagePath={icons.burden}
          navigationPath={NAVIGATIONS.LOADING_DENSITY.name}
          text={NAVIGATIONS.LOADING_DENSITY.title.toUpperCase()}
        />
        <Card
          imagePath={icons.subdrill}
          navigationPath={NAVIGATIONS.LOADING_DENSITY.name}
          text={NAVIGATIONS.LOADING_DENSITY.title.toUpperCase()}
        />
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
