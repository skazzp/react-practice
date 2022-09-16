// import PropTypes from 'prop-types';
import Header from '../Header/Header';

const Categories = ({ categoriesList, closeCategories, setCategory }) => {
  return (
    <>
      <Header btnContent={'back'} title={'Categories'} closeCategories={closeCategories} />
      <ul>
        {categoriesList.map(({ id, category }) => {
          return (
            <li key={id}>
              <div>{category}</div>
              <button
                onClick={() => {
                  // console.log(id, category);
                  setCategory(category);
                  closeCategories();
                }}
              >
                {category}
              </button>
            </li>
          );
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

// Categories.propTypes = {
//   categoriesList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType[(PropTypes.number, PropTypes.string)],
//       name: PropTypes.string,
//     })
//   ),
// };
