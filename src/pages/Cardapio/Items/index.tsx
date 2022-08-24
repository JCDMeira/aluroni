import React from 'react';

import Item from './Item';

import MenuItems from 'data/MenuItems.json';
import styles from './Items.module.scss';

interface ItemProps {
  searchInput: string;
  selectedFilter: number | null;
  canSort: string;
}

const onSearch = (title: string, searchInput: string) => {
  const regex = new RegExp(searchInput, 'i');
  return regex.test(title);
};

const onFilter = (id: number, selectedFilter: number | null) => {
  if (selectedFilter !== null) return selectedFilter === id;
  return true;
};

const onSort = (list: typeof MenuItems, canSort: string) => {
  switch (canSort) {
    case 'porcao':
      return list.sort((a, b) => (a.size > b.size ? 1 : -1));
    case 'qtd_pessoas':
      return list.sort((a, b) => (a.serving > b.serving ? 1 : -1));
    case 'preco':
      return list.sort((a, b) => (a.price > b.price ? 1 : -1));
    default:
      return list;
  }
};

const Items: React.FC<ItemProps> = ({
  searchInput,
  selectedFilter,
  canSort,
}) => {
  //@ estado derivado, não era necessário
  // const [list, setList] = useState(MenuItems);

  // useEffect(() => {
  //   const newList = MenuItems.filter(
  //     (item) =>
  //       onSearch(item.title, searchInput) &&
  //       onFilter(item.category.id, selectedFilter)
  //   );
  //   setList(newList);
  // }, [searchInput, selectedFilter]);

  const list = onSort(
    MenuItems.filter(
      (item) =>
        onSearch(item.title, searchInput) &&
        onFilter(item.category.id, selectedFilter),
    ),
    canSort,
  );

  return (
    <div className={styles.itens}>
      {list.map((menuItem) => (
        <Item key={menuItem.id} {...menuItem} />
      ))}
    </div>
  );
};

export default Items;
