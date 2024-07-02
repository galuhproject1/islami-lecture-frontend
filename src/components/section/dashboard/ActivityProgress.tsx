const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const ActivityProgress = () => {
  const generateProgressData = () => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = getDaysInMonth(month, year);

    const progressData = [];
    let week = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const progressValue = Math.floor(Math.random() * 5) + 1; // Nilai acak antara 1 hingga 5
      week.push(progressValue.toString());

      if (new Date(year, month, day).getDay() === 6 || day === daysInMonth) {
        // Jika hari Sabtu atau hari terakhir bulan ini, mulai minggu baru
        progressData.push(week);
        week = [];
      }
    }

    // Menambahkan sisa minggu terakhir jika belum penuh
    if (week.length > 0) {
      while (week.length < 7) {
        week.push("");
      }
      progressData.push(week);
    }

    return progressData;
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const progressData = generateProgressData();

  const getColor = (level: string) => {
    switch (level) {
      case "1":
        return "bg-teal-100";
      case "2":
        return "bg-teal-200";
      case "3":
        return "bg-teal-300";
      case "4":
        return "bg-teal-400";
      case "5":
        return "bg-teal-500";
      default:
        return "bg-white";
    }
  };

  const date = new Date();
  const month = date.getMonth();

  const getNameMonth = (month: number) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month];
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Progress</h2>
        <span className="text-gray-500">{getNameMonth(month)}</span>
      </div>
      <div className="h-[1px] w-full bg-gray-200 mb-4"></div>
      <div className="grid grid-cols-7 gap-2 text-center text-gray-500 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {progressData.flat().map((level, index) => (
          <div
            key={index}
            className={`h-8 w-8 rounded ${getColor(level)}`}
          ></div>
        ))}
      </div>
      <div className="flex justify-between mt-4 items-center">
        <span className="text-gray-500">Low</span>
        <div className="flex">
          <div className="h-4 w-4 bg-teal-100 rounded mr-1"></div>
          <div className="h-4 w-4 bg-teal-200 rounded mr-1"></div>
          <div className="h-4 w-4 bg-teal-300 rounded mr-1"></div>
          <div className="h-4 w-4 bg-teal-400 rounded mr-1"></div>
          <div className="h-4 w-4 bg-teal-500 rounded"></div>
        </div>
        <span className="text-gray-500">Full</span>
      </div>
    </div>
  );
};

export default ActivityProgress;
