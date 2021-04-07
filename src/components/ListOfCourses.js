import React from 'react';
import '../styles/listOfCourses.css';

const inicialCourses = [{
  id: 1,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 2,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 3,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 4,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 5,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 6,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 7,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 8,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 9,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 10,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 11,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 12,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 13,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 14,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 15,
  title: 'Curso de piloto',
  instructor: 'Maximilian Kaden',
  description: 'Este curso é muito bom',
  img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
},
{
  id: 16,
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
    const {
      title, img, instructor, id,
    } = course;
    return (
      <div className="course-card" key={id}>
        <div className="course-card-image">
          <img src={img} alt="course" />
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
