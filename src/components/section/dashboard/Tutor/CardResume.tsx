import IconLearnOrange from "../../../../assets/images/icon/orange-learning.svg";
type Data = {
  id: number;
  title: string;
  desc: string;
  total: number;
  icon: JSX.Element;
};

const CardResume = () => {
  const data: Data[] = [
    {
      id: 1,
      title: "Total Course",
      desc: "Total Course",
      total: 2,
      icon: <img src={IconLearnOrange} alt="icon" />,
    },
    {
      id: 2,
      title: "Actif Course",
      desc: "Training",
      total: 2,
      icon: <img src={IconLearnOrange} alt="icon" />,
    },
    {
      id: 3,
      title: "Total Murid",
      desc: "Orang",
      total: 2,
      icon: <img src={IconLearnOrange} alt="icon" />,
    },
  ];
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex justify-start items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 bg-blue-200"
          >
            <h1 className="text-[18px] font-bold border-b pb-2 w-full">
              {item.title}
            </h1>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-[18px] font-bold">{item.total}</h1>
                <p className="text-[14px]">{item.desc}</p>
              </div>
              <div>{item.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardResume;
