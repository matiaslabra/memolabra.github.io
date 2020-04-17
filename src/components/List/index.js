import React from 'react';
import ListWrapper from './ListWrapper';

function List({ items, component }) {
  const ComponentToRender = component;

  const onClick = (elem) => {
    const anchor =
      elem.target.tag !== 'A' ? elem.target.closest('a') : elem.target;
    if (anchor.href.split('/').pop() !== '#') {
      window.open(anchor.href, '_blank');
    }
  };

  return (
    <ListWrapper>
      {items.map((item, key) => {
        return (
          <ComponentToRender item={item} key={key} onClickAction={onClick} />
        );
      })}
    </ListWrapper>
  );
}

export default List;
