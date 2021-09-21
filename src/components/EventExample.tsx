import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('')
  // флаг заноса в квадрат из выход за его предлы
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Указывваем тип события
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  // Указываем тип события
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  }
  // Указываем тип события <указываем с каким елементом работаем>
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {

  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
    console.log('dfd');

  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const dragWithPrevenHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }
  return (
    <div>
      <input value={value} onChange={changeHandler} type='text' placeholder={'controlled'} />
      <input ref={inputRef} type='text' placeholder={'unguided'} />
      <button onClick={clickHandler}>Отправить</button>
      <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, background: 'lightblue' }}></div>
      <div

        onDrop={dropHandler}
        // вышли за пределы квыадрата
        onDragLeave={leaveHandler}
        onDragOver={dragWithPrevenHandler}
        style={{ width: 200, height: 200, background: isDrag ? 'red' : 'lightblue', marginTop: 15 }}></div>
    </div>
  )
}

export default EventsExample;