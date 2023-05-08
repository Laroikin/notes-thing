import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRelativeDate(date: Date) {
  dayjs.extend(relativeTime);
  dayjs.extend(updateLocale);
  dayjs.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s',
      s: '1s',
      m: '1m',
      mm: '%dm',
      h: '1h',
      hh: '%dh'
    }
  });

  let displayDate;

  const noteDate = dayjs(date);

  if (noteDate.diff(dayjs(), 'day') == 0) {
    displayDate = noteDate.fromNow();
  } else if (noteDate.year() == dayjs().year()) {
    displayDate = noteDate.format('MMM D');
  } else {
    displayDate = noteDate.format('MMM D, YYYY');
  }

  return displayDate;
}
