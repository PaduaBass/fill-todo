import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { useTranslation } from 'react-i18next';

export const convertedPassedTime = (createdAt: Date) => {
  const currentDate = new Date();
  const { t } = useTranslation();
  if (differenceInDays(createdAt, currentDate) === 0 && differenceInHours(currentDate, createdAt) === 0 && differenceInMinutes(currentDate, createdAt) === 0) {
    let diffSeconds = differenceInSeconds(currentDate, createdAt);
    return `${diffSeconds} ${t(diffSeconds === 1 ? 'secondPassed' : 'secondsPassed')}`;
  }
  if (differenceInDays(createdAt, currentDate) === 0 && differenceInHours(currentDate, createdAt) === 0) {
    let diffMinutes = differenceInMinutes(currentDate, createdAt);
    return `${diffMinutes} ${t(diffMinutes === 1 ? 'minutePassed' : 'minutesPassed')}`;

  }
  if (differenceInDays(createdAt, currentDate) === 0 && differenceInHours(currentDate, createdAt) > 0) {
    let diffHours = differenceInHours(currentDate, createdAt);
    return `${diffHours} ${t(diffHours === 1 ? 'hourPassed' : 'hoursPassed')}`;
  }
  if (differenceInDays(createdAt, currentDate) === 1) {
    return t('yesterday');
  }
  if (differenceInDays(createdAt, currentDate) > 1) {
    let diffDays = differenceInDays(currentDate, createdAt);
    return `${diffDays} ${t(diffDays === 1 ? 'dayPassed' : 'daysPassed')}`;
  }
}