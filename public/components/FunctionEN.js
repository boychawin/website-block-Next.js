
export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#1b2836" }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#1b2836" }}
      onClick={onClick}
    />
  );
}

export const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD'
  }).format(value);

export const numberFormat2 = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(value);

export function limit(val, max) {
  if (val.length === 1 && val[0] > max[0]) {
    val = '0' + val;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01';

      //this can happen when user paste number
    } else if (val > max) {
      val = max;
    }
  }

  return val;
}

export function cardExpiry(val) {
  let min = limit(val.substring(10));
  let time = limit(val.substring(8, 10));
  let year = limit(val.substring(4, 8));
  let month = limit(val.substring(0, 2), '12');
  let day = limit(val.substring(2, 4), '31');

  //  let year2 = year + 543;
  const year2 = parseInt(year);
  const year3 = (year2 + 543);

  return month + (day.length ? '/' + day + '/' + year3 + ' ' + time + ':' + min : '');
}

export function thaidate(val) {

  let year = limit(val.substring(0, 5));
  let month = limit(val.substring(5, 7), '12');
  let day = limit(val.substring(9), '31');

  //  let year2 = year + 543;
  const year2 = parseInt(year);
  const year3 = (year2 + 543);

  if (month == "01") { month = "มกราคม"; }
  if (month == "02") { month = "กุมภาพันธ์"; }
  if (month == "03") { month = "มีนาคม"; }
  if (month == "04") { month = "เมษายน"; }
  if (month == "05") { month = "พฤษภาคม"; }
  if (month == "06") { month = "มิถุนายน"; }
  if (month == "07") { month = "กรกฎาคม"; }
  if (month == "08") { month = "สิงหาคม"; }
  if (month == "09") { month = "กันยายน"; }
  if (month == "10") { month = "ตุลาคม"; }
  if (month == "11") { month = "พฤศจิกายน"; }
  if (month == "12") { month = "ธันวาคม"; }

  if (day == "01") { day = "1"; }
  if (day == "02") { day = "2"; }
  if (day == "03") { day = "3"; }
  if (day == "04") { day = "4"; }
  if (day == "05") { day = "5"; }
  if (day == "06") { day = "6"; }
  if (day == "07") { day = "7"; }
  if (day == "08") { day = "8"; }
  if (day == "09") { day = "9"; }

  return day + (day.length ? ' ' + month + ' ' + year3 : '');
}

//2019-11-28T13:17:47Z.
export function thaidate2(val) {

  let year = limit(val.substring(0, 5));
  let month = limit(val.substring(5, 7), '12');
  let day = limit(val.substring(8, 10), '31');

  //  let year2 = year + 543;
  const year2 = parseInt(year);
  const year3 = (year2 + 543);

  if (month == "01") { month = "มกราคม"; }
  if (month == "02") { month = "กุมภาพันธ์"; }
  if (month == "03") { month = "มีนาคม"; }
  if (month == "04") { month = "เมษายน"; }
  if (month == "05") { month = "พฤษภาคม"; }
  if (month == "06") { month = "มิถุนายน"; }
  if (month == "07") { month = "กรกฎาคม"; }
  if (month == "08") { month = "สิงหาคม"; }
  if (month == "09") { month = "กันยายน"; }
  if (month == "10") { month = "ตุลาคม"; }
  if (month == "11") { month = "พฤศจิกายน"; }
  if (month == "12") { month = "ธันวาคม"; }

  if (day == "01") { day = "1"; }
  if (day == "02") { day = "2"; }
  if (day == "03") { day = "3"; }
  if (day == "04") { day = "4"; }
  if (day == "05") { day = "5"; }
  if (day == "06") { day = "6"; }
  if (day == "07") { day = "7"; }
  if (day == "08") { day = "8"; }
  if (day == "09") { day = "9"; }

  return day + (day.length ? ' ' + month + ' ' + year3 : '');
}
export function thaidate3(val) {

  let year = limit(val.substring(0, 5));
  let month = limit(val.substring(5, 7), '12');
  let day = limit(val.substring(8, 10), '31');
  let date = limit(val.substring(11, 19), '31');

  //  let year2 = year + 543;
  const year2 = parseInt(year);
  const year3 = (year2 + 543);

  if (month == "01") { month = "มกราคม"; }
  if (month == "02") { month = "กุมภาพันธ์"; }
  if (month == "03") { month = "มีนาคม"; }
  if (month == "04") { month = "เมษายน"; }
  if (month == "05") { month = "พฤษภาคม"; }
  if (month == "06") { month = "มิถุนายน"; }
  if (month == "07") { month = "กรกฎาคม"; }
  if (month == "08") { month = "สิงหาคม"; }
  if (month == "09") { month = "กันยายน"; }
  if (month == "10") { month = "ตุลาคม"; }
  if (month == "11") { month = "พฤศจิกายน"; }
  if (month == "12") { month = "ธันวาคม"; }

  if (day == "01") { day = "1"; }
  if (day == "02") { day = "2"; }
  if (day == "03") { day = "3"; }
  if (day == "04") { day = "4"; }
  if (day == "05") { day = "5"; }
  if (day == "06") { day = "6"; }
  if (day == "07") { day = "7"; }
  if (day == "08") { day = "8"; }
  if (day == "09") { day = "9"; }

  return day + (day.length ? ' ' + month + ' ' + year3 + ' ' + date : '');
}


export function thaidate4(val) {

  let year = limit(val.substring(0, 5));
  let month = limit(val.substring(5, 7), '12');
  let day = limit(val.substring(8, 10), '31');

  //  let year2 = year + 543;
  const year2 = parseInt(year);
  const year3 = (year2);

  if (month == "01") { month = "มกราคม"; }
  if (month == "02") { month = "กุมภาพันธ์"; }
  if (month == "03") { month = "มีนาคม"; }
  if (month == "04") { month = "เมษายน"; }
  if (month == "05") { month = "พฤษภาคม"; }
  if (month == "06") { month = "มิถุนายน"; }
  if (month == "07") { month = "กรกฎาคม"; }
  if (month == "08") { month = "สิงหาคม"; }
  if (month == "09") { month = "กันยายน"; }
  if (month == "10") { month = "ตุลาคม"; }
  if (month == "11") { month = "พฤศจิกายน"; }
  if (month == "12") { month = "ธันวาคม"; }

  if (day == "01") { day = "1"; }
  if (day == "02") { day = "2"; }
  if (day == "03") { day = "3"; }
  if (day == "04") { day = "4"; }
  if (day == "05") { day = "5"; }
  if (day == "06") { day = "6"; }
  if (day == "07") { day = "7"; }
  if (day == "08") { day = "8"; }
  if (day == "09") { day = "9"; }

  return year3;
}