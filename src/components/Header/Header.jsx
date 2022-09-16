import { HeaderStyled, Button } from './Header.styled';
import sprite from '../../assets/icons/sprite.svg';
const Header = ({ title, btnContent, closeCategories }) => {
  return (
    <HeaderStyled>
      {closeCategories && (
        <Button type="button" onClick={() => closeCategories()}>
          {
            <svg>
              <use href={sprite + '#icon-arrow-left2'}></use>
            </svg>
          }
        </Button>
      )}
      <h1>{title}</h1>
    </HeaderStyled>
  );
};
export default Header;
