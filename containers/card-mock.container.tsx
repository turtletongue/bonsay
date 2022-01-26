export const CardMock = () => {
  return (
    <div className="group animate-pulse bg-white max-w-xs flex flex-col overflow-hidden border-2 border-decoration transition-colors text-center font-poppins text-primary">
      <div className="relative flex justify-center items-center">
        <div className="overflow-hidden">
          <div className="bg-decoration w-56 h-64" />
        </div>
      </div>
      <div className="w-40 h-8 rounded-sm" />
      <hr className="border rounded-sm border-decoration mx-2 my-2" />
      <div className="w-40 h-8 rounded-sm" />
    </div>
  );
};

export default CardMock;
