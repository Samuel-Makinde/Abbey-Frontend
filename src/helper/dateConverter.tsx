// src/utils/DateConverter.ts

export const DateConverter = (isoString: string): string => {
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate; 
};
