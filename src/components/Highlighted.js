import React from 'react';
import '../styles/highlighted.css';

class HighlightedCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedCourses: [{
        title: 'Curso de piloto',
        description: 'Descrição do curso',
        img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
      },
      {
        title: 'Curso de piloto',
        description: 'Descrição do curso',
        img: 'https://cdn.falauniversidades.com.br/wp-content/uploads/2020/04/02122231/ead-1.jpg',
      }],
    };
  }

  createCourseBox(course) {
    const { title, description, img } = course;
    return (
      <div className="course-highlighted">
        <div className="course-highlighted-image">
          <img src={img} alt="course" />
        </div>
        <div className="course-highlighted-informations">
          <p className="course-title">{ title }</p>
          <div className="course-description">
            { description }
          </div>
          <button className="course-button" type="button">
            Veja mais detalhes
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { highlightedCourses } = this.state;
    return (
      <section className="highlightedCourses-box">
        {highlightedCourses.map((course) => this.createCourseBox(course))}
      </section>
    );
  }
}

export default HighlightedCourses;
