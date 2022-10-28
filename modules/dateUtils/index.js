import dayjs from 'dayjs';
import { MONTH_TH } from '../../constants/globalConstants';

export const getThaiDate = (dateString) => {
  let date = dayjs(dateString);
  let dayInt = parseInt(date.format('DD'));
  let monthInt = parseInt(date.format('MM'));
  let yearInt = parseInt(date.format('YYYY')) + 543;
  return dayInt && monthInt && yearInt ? `${dayInt ? dayInt : ''} ${MONTH_TH[monthInt - 1] ? MONTH_TH[monthInt - 1] : ''} ${yearInt ? yearInt : ''}` : 'Invalid Date';
};
