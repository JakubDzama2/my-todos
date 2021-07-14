// declare global {
//     interface Date {
//         addDays(days: number): Date;
//     }
// }

// Date.prototype.addDays = function (days: number) {
//     const date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
// };



export const addDays = (date: Date, days: number) => {
    const newDate = new Date(date.valueOf());
    newDate.setDate(date.getDate() + days);
    return newDate;
}