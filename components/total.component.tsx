interface TotalProps {
  total: number;
}

export const Total = ({ total }: TotalProps) => {
  return (
    <div className="flex justify-between">
      <div className="font-medium">Итог</div>
      <div>{total.toLocaleString()} ₽</div>
    </div>
  );
};

export default Total;
