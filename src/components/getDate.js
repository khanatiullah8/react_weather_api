const getDate = (day) => {
  const currentDate = day?.dt_txt.slice(0,10);
  const cYear = currentDate.slice(0, currentDate.indexOf('-'));
  const cMonth = currentDate.slice(currentDate.indexOf('-')+1, currentDate.lastIndexOf('-'));
  const cDay = currentDate.slice(currentDate.lastIndexOf('-')+1, currentDate.length);
  const cDate = new Date(cYear, cMonth-1, cDay).toDateString();
  const mDay = cDate.slice(0, 3);
  const mDate = cDate.slice(4, );

  return [mDay, mDate];
}

export default getDate;