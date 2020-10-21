export const newDate = (oldDate) => {
  var tempDate = new Date(oldDate);
  var oldTime = Math.round(tempDate.getTime() / 1000);
  var shownDate = "";
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = tempDate.getFullYear();
  var month = tempDate.getMonth();
  var day = tempDate.getDate();
  shownDate = months[month] + " " + day + ", " + year;
  return shownDate;
};
