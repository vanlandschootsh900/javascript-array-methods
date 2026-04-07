//Shay VanLandschoot
//4/7/26
//array methods practice

const colors = ['red','blue','green', 'purple','yellow'];


// const favorit_colors = alert (`I have ${colors.length} favorit colors`);
// console.log(favorit_colors);

colors.push('pink');
const text = colors.join(', ');
console.log(text);

const removed_colors = colors.pop();
console.log(removed_colors);
const pop_color = colors.join(', ')
console.log(pop_color)


const removed_first_color = colors.shift();
console.log(removed_first_color);
const shift_color = colors.join(', ');
console.log(shift_color);

const add_color = colors.unshift('black');
const unshift_color = colors.join(', ');
console.log(unshift_color);

const num_colors = colors.indexOf('red');
const where_num_color = (`red is the number ${num_colors} color`);
console.log(where_num_color);

colors.length = 3;
const three_colors = colors.join(', ');
console.log(three_colors);