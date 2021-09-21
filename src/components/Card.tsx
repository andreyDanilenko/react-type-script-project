import React, { FC, useState } from "react";
// оператор перечисления в typescript
export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

// Определение интерфейса для обьектов
interface CardProps {
  // Вопросительный знак помечает необязательные пропсы
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({
  width,
  height,
  children,
  variant,
  onClick
}) => {
  const [state] = useState(0);
  return (
    <div style={{
      height, width,
      border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
      background: variant === CardVariant.primary ? 'lightgray' : ''
    }}
      onClick={() => onClick(state + 1)}
    >
      {children}
    </div>
  )
}

export default Card;