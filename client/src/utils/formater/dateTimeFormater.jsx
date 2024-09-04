import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function formatTimeFromNow(dateTime) {
    return dayjs(dateTime).fromNow();
}
