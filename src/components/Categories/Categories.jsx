import PropTypes from 'prop-types';
import Header from '../Header/Header';

const Categories = ({ categoriesList }) => {
  return (
    <>
      <Header btnContent={undefined} title={'Categories'} />
      <ul>
        {categoriesList.map(category => {
          return <li key={category.id}>{category.name}</li>;
        })}
      </ul>
      <form action="">
        <input type="text" placeholder="New category" />
        <button type="submit">+</button>
      </form>
    </>
  );
};

export default Categories;

Categories.propTypes = {
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType[(PropTypes.number, PropTypes.string)],
      name: PropTypes.string,
    })
  ),
};
