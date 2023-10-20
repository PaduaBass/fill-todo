import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

export const convertedPassedTime = (createdAt: Date) => {
  const currentDate = new Date();
  if (differenceInDays(createdAt, currentDate) === 0 && differenceInHours(currentDate, createdAt) === 0 && differenceInMinutes(currentDate, createdAt) === 0) {
    return `${differenceInSeconds(currentDate, createdAt)} seconds ago`;
  }
  if (differenceInDays(createdAt, currentDate) === 0 && differenceInHours(currentDate, createdAt) === 0) {
    return `${differenceInMinutes(currentDate, createdAt)} minutes ago`;
  }
  if (differenceInDays(createdAt, currentDate) === 0 && differenceInHours(currentDate, createdAt) > 0) {
    return `${differenceInMinutes(currentDate, createdAt)} hours ago`;
  }
  if (differenceInDays(createdAt, currentDate) === 1) {
    return `yesterday`;
  }
  if (differenceInDays(createdAt, currentDate) > 1) {
    return `${differenceInDays(currentDate, createdAt)} days ago`;
  }
}