import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const formatedDate = (isoString: string): string => {
    return format(new Date(isoString), 'dd.MM.yyyy', { locale: ru });
};
export default formatedDate;