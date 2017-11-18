import correctNumber from './correctNumber';

const getDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = correctNumber(now.getMonth() + 1);
    const day = correctNumber(now.getDate());
    const hours = correctNumber(now.getHours());
    const minutes = correctNumber(now.getMinutes());

    return year + '-' + month + '-' + day + '-' + hours + minutes;
}

export default getDateTime;
