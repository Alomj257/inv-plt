import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function formatTimeFromNow(dateTime) {
    return dayjs(dateTime).fromNow();
}


export const currencyFormatter=(val)=>{
    try {
        const euroFormatter = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
          });
         return euroFormatter.format(val);
        
    } catch (error) {
        console.log(error)
      return  euroFormatter.format(0)
    }
}