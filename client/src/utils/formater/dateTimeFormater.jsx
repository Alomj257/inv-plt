import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function formatTimeFromNow(dateTime) {
    return dayjs(dateTime).fromNow();
}


// export const currencyFormatter=(val)=>{
//     try {
//         const euroFormatter = new Intl.NumberFormat('de-DE', {
//             style: 'currency',
//             currency: 'EUR',
//           });
//          return euroFormatter.format(val);
        
//     } catch (error) {
//         console.log(error)
//       return  euroFormatter.format(0)
//     }
// }

export const currencyFormatter = (val, currency = 'EUR', locale = 'de-DE', style = 'currency') => {
    try {
      const formatter = new Intl.NumberFormat(locale, {
        style: style,          
        currency: currency,     
      });
  
      return formatter.format(val);
    } catch (error) {
      return val !== undefined ? formatter.format(0) : '0'; 
    }
  };

  export const deformateCurrency = (formattedCurrency) => {
    const numericString = formattedCurrency.replace(/[^\d-]/g, '');
    
    return parseInt(numericString, 10);
  };