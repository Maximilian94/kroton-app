import React from 'react';
import '../styles/listOfCourses.css';

const inicialCourses = [{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
}];

class ListOfCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: inicialCourses,
    };
  }

  createCourseCard(course) {
    const { title, img, instructor } = course;
    return (
      <div className="course-card">
        <div className="course-card-image">
          <img src={img} />
        </div>
        <div className="course-card-informations">
          <p className="course-card-instructor">{instructor}</p>
          <p className="course-card-title">{title}</p>
        </div>
        <button type="button" className="course-card-button">
          Acessar
        </button>
      </div>
    );
  }

  render() {
    const { courses } = this.state;
    return (
      <main>
        <h2>O que voce quer aprender ?</h2>
        <div className="course-cards">
          {courses.map((course) => this.createCourseCard(course))}
        </div>
        <div className="courses-list-load-more">
          <p>+ Carregar mais cursos</p>
        </div>
      </main>
    );
  }
}

export default ListOfCourses;
