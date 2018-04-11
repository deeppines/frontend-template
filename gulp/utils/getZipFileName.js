import getDateTime from './getTimestamp';

const datetime = '-' + getDateTime();
const zipName = 'web' + datetime + '.zip';

export default zipName;
