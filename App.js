import React from 'react';
import { ScrollView } from 'react-native';
import Movie from './components/Movie';

const AllMovies = () => {
    return (
        <ScrollView>
            <Movie
                title="Doctor Sleep"
                year={2019}
                icon_name="skull"
                icon_color="red"
                poster={require("./img/doctor-sleep.jpg")}
            />
            <Movie
                title="Midway"
                year={2020}
                icon_name="person-rifle"
                icon_color="blue"
                poster={require("./img/midway.jpg")}
            />
            <Movie
                title="Avatar"
                year={2009}
                icon_name="film"
                icon_color="green"
                poster={{ uri: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/avatar-the-way-of-water-poster.jpg' }}
            />
        </ScrollView>
    );
};

export default AllMovies;