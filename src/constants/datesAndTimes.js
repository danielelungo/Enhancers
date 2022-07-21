export const m_names = [
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

export const d_names = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const newDate = new Date();

export const curr_date = newDate.getDate();
export const curr_month = newDate.getMonth();
export const curr_day = newDate.getDay();
export const curr_hour = newDate.getHours();

export const completeDay = `${d_names[curr_day]} ${curr_date}, `;
export const completeMonth = m_names[curr_month];
export const romeTime = newDate
  .toLocaleTimeString("en-US", {
    timeZone: "Europe/Rome",
  })
  .replace(/(.*)\D\d+/, "$1");

export const londonTime = newDate
  .toLocaleTimeString("en-US", {
    timeZone: "Europe/London",
  })
  .replace(/(.*)\D\d+/, "$1");
