import IconLearnOrange from "../../../../assets/images/icon/orange-learning.svg";
import IconLearnGreen from "../../../../assets/images/icon/green-learning.svg";
import IconUsers from "../../../../assets/images/icon/users.svg";
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
      icon: <img src={IconLearnGreen} alt="icon" />,
    },
    {
      id: 3,
      title: "Total Murid",
      desc: "Orang",
      total: 2,
      icon: <img src={IconUsers} alt="icon" />,
    },
  ];

  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex justify-start items-center gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${index === 2 ? "border-0" : "border-r-2 border-[#E5E5E5] px-4" } flex flex-col justify-center items-center gap-4 w-1/3`} 
          >
            <h1 className="text-[18px] font-bold border-b pb-2 w-full">
              {item.title}
            </h1>
            <div className="flex justify-between w-full">
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-[24px] font-bold">{item.total}</h1>
                <p className="text-[14px]">{item.desc}</p>
              </div>
              <div className={`${index == 0 ? "bg-orange-200" : index == 1 ? "bg-green-200" : "bg-purple-200"} rounded-full p-2 w-[56px] h-[56px] flex justify-center items-center`}>{item.icon}</div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default CardResume;
