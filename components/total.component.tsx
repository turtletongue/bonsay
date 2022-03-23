interface TotalProps {
  total: number;
  className?: string;
}

export const Total = ({ total, className = '' }: TotalProps) => {
  return (
    <div className={`text-lg flex justify-between items-center ${className}`}>
      <div className="bg-white z-10 pr-4">Итог</div>
      <div className="bg-white z-10 pl-4">{total.toLocaleString('ru')} ₽</div>
    </div>
  );
};

export default Total;
