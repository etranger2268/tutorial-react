import Square from './Square';

export default function Board() {
  return (
    <div className="m-5 p-0">
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="flex">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
