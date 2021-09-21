import React from "react";

interface ListProps<T> {
  // Массив элементов любого типа
  items: T[];
  // Функция отрисовки конкретного окмпонента
  renderItem: (item: T) => React.ReactNode;

}

export default function List<T>(props: ListProps<T>) {
  return (
    <div>
      {props.items.map(props.renderItem)}
    </div>
  )
}