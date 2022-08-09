import { Link } from 'react-router-dom';
import { ContainerPages } from '../stylesheet/WrapperPages.styled';

export default function NotFoundView() {
  return (
    <ContainerPages>
      <h1>
        404 Страница не найдена, вернитесь на {''}
        <Link to="/">домашнюю страницу</Link>
      </h1>
    </ContainerPages>
  );
}
