import React from 'react';
import { View, Text } from 'react-native';

const Movie = ({ title, year }) => {
  return (
      <View>
        <Text></Text>
        <Text>
          Movie: {title} {year}
        </Text>
      </View>
  );
};

const AllMovies = () => {
  return (
      <View>
        <Movie title="Doctor Sleep" year={2019} />
      </View>
  );
};

export default AllMovies;