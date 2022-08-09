import { Link } from 'react-router-dom';
import { ContainerPages } from '../stylesheet/WrapperPages.styled';

export default function NotFoundView() {
  return (
    <ContainerPages>
      <h2>
        404 Страница не найдена, вернитесь на {''}
        <Link to="/" style={{ color: 'blue' }}>
          домашнюю страницу
        </Link>
      </h2>
    </ContainerPages>
  );
}
