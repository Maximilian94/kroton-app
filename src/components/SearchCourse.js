import React from 'react';
import '../styles/SearchCourse.css';

class SearchCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['categoria 1', 'categoria 2'],
    };
  }

  createOptionsCategories(category) {
    return (
      <option key={category}>{category}</option>
    );
  }

  render() {
    const { categories } = this.state;
    return (
      <form className="search-course-box">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <p>Pesquise o seu curso</p>
        <div className="search-course-inputs">
          <div className="shearch-field-input">
            <label htmlFor="shearch-field-1">
              Pergunta 1
              <input type="text" id="shearch-field-1" placeholder="Digite a resposta" />
            </label>
          </div>
          <div className="shearch-field-input">
            <label htmlFor="shearch-field-2">
              Pergunta 2
              <input type="text" id="shearch-field-2" placeholder="Digite a resposta" />
            </label>
          </div>
          <div className="shearch-field-input">
            Pergunta 3
            <select>
              { categories.map((category) => this.createOptionsCategories(category))}
            </select>
          </div>
          <div className="shearch-field-button">
            <button type="button" className="button-icon">
              <i className="fa fa-search shearch-icon" />
            </button>
            <button type="button" className="button-written">
              <p>Buscar ...</p>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchCourse;
