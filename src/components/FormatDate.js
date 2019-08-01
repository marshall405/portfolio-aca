// return a string to store in MySQL as created on

function getMonth(month) {
    let stringMonth;
    switch (month) {
        case 0:
            stringMonth = 'Jan.';
            break;
        case 1:
            stringMonth = 'Feb.';
            break;
        case 2:
            stringMonth = 'Mar.';
            break;
        case 3:
            stringMonth = 'April';
            break;
        case 4:
            stringMonth = 'May';
            break;
        case 5:
            stringMonth = 'June';
            break;
        case 6:
            stringMonth = 'July';
            break;
        case 7:
            stringMonth = 'Aug.';
            break;
        case 8:
            stringMonth = 'Sept.';
            break;
        case 9:
            stringMonth = 'Oct.';
            break;
        case 10:
            stringMonth = 'Nov.';
            break;
        case 11:
            stringMonth = 'Dec.';
            break;
        default:
            stringMonth = 'invalid month';
            break;
    }
    return stringMonth;
}





export const FormatDate = () => {
    let date = new Date();
    return `${getMonth(date.getMonth())} ${date.getDate()} ${date.getFullYear()}`;
}