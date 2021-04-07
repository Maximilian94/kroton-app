import React from 'react';

import Header from '../components/Header';
import HighlightedCourses from '../components/Highlighted';
import SearchCourse from '../components/SearchCourse';
import ListOfCourses from '../components/ListOfCourses';

import '../App.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <HighlightedCourses />
        <SearchCourse />
        <ListOfCourses />
      </div>
    );
  }
}

export default Home;
