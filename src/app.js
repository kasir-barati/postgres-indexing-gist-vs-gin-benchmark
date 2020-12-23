const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '..', '.env'),
});
const sequelize = require('./models/sequelize');
const Product = require('./models/product');

const lorem = [
  'یک',
  'ماژول',
  'جاواسکریپت',
  'برای',
  'تولید',
  'متن',
  'لورم',
  'ایپسوم',
  'به',
  'زبان',
  'فارسی',
  'است',
  'لورم',
  'ایپسوم',
  'متنی',
  'آزمایشی',
  'و',
  'بی',
  'معنی',
  'در',
  'طراحی',
  'می',
  'باشد',
  'که',
  'طراح',
  'گرافیک',
  'از',
  'این',
  'متن',
  'به',
  'عنوان',
  'عنصری',
  'از',
  'ترکیب',
  'بندی',
  'برای',
  'پر',
  'کردن',
  'صفحه',
  'و',
  'ارایه',
  'اولیه',
  'شکل',
  'ظاهری',
  'و',
  'کلی',
  'طرح',
  'سفارش',
  'گرفته',
  'شده',
  'استفاده',
  'می',
  'نماید',
];

function getRandom(arr, counter) {
  let result = new Array(counter);
  let arrLength = arr.length;
  let taken = new Array(arrLength);

  if (counter > arrLength) {
    throw new RangeError(
      'getRandom: more elements taken than available',
    );
  }

  while (counter--) {
    let x = Math.floor(Math.random() * arrLength);
    result[counter] = arr[x in taken ? taken[x] : x];
    taken[x] =
      --arrLength in taken ? taken[arrLength] : arrLength;
  }

  return result.join(' ');
}

sequelize
  .getSequelize()
  .sync()
  .then(() => {
    for (let i = 0; i < 10000; i++) {
      Product.create({
        title: getRandom(lorem, 10),
      });
    }
  });
