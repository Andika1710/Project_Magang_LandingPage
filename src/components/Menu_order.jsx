import React, { useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  addDays,
  isSameMonth,
  isSameDay,
  isWithinInterval
} from 'date-fns';

const CalendarComponent = ({ selectedDate, onDateClick }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 0 });

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-xs font-medium text-center text-gray-500">
          {format(addDays(startDate, i), 'E')}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, 'd');
        const cloneDay = day;
        const isCheckInDate = isSameDay(day, selectedDate.checkInDate);
        const isCheckOutDate = isSameDay(day, selectedDate.checkOutDate);
        const isInRange = selectedDate.checkInDate && selectedDate.checkOutDate && isWithinInterval(day, {
          start: selectedDate.checkInDate,
          end: selectedDate.checkOutDate
        });

        days.push(
          <div
            key={day}
            className={`p-2 text-center cursor-pointer rounded-full ${!isSameMonth(day, startOfMonth(currentMonth))
              ? 'text-gray-300'
              : isInRange
                ? 'bg-ijo'
                : isCheckInDate || isCheckOutDate
                  ? 'bg-ijo opacity-90 text-white'
                  : 'text-gray-900 hover:bg-gray-200'
              }`}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="inline-block w-8 h-8 leading-8">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day} className="grid grid-cols-7">
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const renderHeader = () => (
    <div className="flex flex-col font-playfair text-[24px] items-center py-[24px]">
      <div className="text-lg font-semibold">
        {format(currentMonth, 'MMMM yyyy')}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={prevMonth} className="mx-1 p-1 rounded-full hover:bg-gray-200">
          <span className="material-icons">chevron_left</span>
        </button>
        <button onClick={nextMonth} className="mx-1 p-1 rounded-full hover:bg-gray-200">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-Bg1 w-full lg:w-[389px] h-[431px] rounded-lg shadow-lg p-4">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

const Menu_order = () => {
  const [selectedDate, setSelectedDate] = useState({
    checkInDate: null,
    checkOutDate: null
  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    duration: '',
    guests: '',
  });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleDateClick = (date) => {
    if (!selectedDate.checkInDate || (selectedDate.checkInDate && selectedDate.checkOutDate)) {
      // Set check-in date if not set or if check-out date is already set
      setSelectedDate({
        checkInDate: date,
        checkOutDate: null
      });
    } else {
      // Set check-out date if check-in date is already set
      if (date > selectedDate.checkInDate) {
        setSelectedDate({
          ...selectedDate,
          checkOutDate: date
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        formDataToSend.append(key, formData[key]);
      }
    }
    formDataToSend.append('checkInDate', selectedDate.checkInDate ? format(selectedDate.checkInDate, 'MMMM dd, yyyy') : '');
    formDataToSend.append('checkOutDate', selectedDate.checkOutDate ? format(selectedDate.checkOutDate, 'MMMM dd, yyyy') : '');
    formDataToSend.append("access_key", "7d45262a-c273-4fcf-a357-51b6b8a5ab8a");

    setResult('Sending...');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.text();

      if (response.ok) {
        setResult('Form Submitted Successfully');
        // Reset form data and selected dates
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          duration: '',
          guests: '',
        });
        setSelectedDate({
          checkInDate: null,
          checkOutDate: null
        });
      } else {
        setResult(data);
      }
    } catch (error) {
      setResult('Error sending form');
    }
  };

  return (
    <main className="w-full h-full p-4">
      <div className="text-ijo text-center font-playfair">
        <h1 className="mt-8 lg:mt-[100px] text-[32px] lg:text-[40px]">When you check in</h1>
        <p className="mt-2 lg:mt-[8px] text-[14px] pb-6 lg:pb-[60px]">Add your travel dates for exact pricing</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-8">
        <div className="mb-8 lg:mb-0">
          <CalendarComponent selectedDate={selectedDate} onDateClick={handleDateClick} />
        </div>
        <div className="w-full max-w-lg">
          <form onSubmit={handleSubmit} className="rounded px-4 pt-6 pb-8 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-poppins text-ijo">
              <div className="mb-4">
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="hello, my first name is"
                  className="border-b-2 w-full py-2"
                />
                <label className="text-sm font-bold mb-2" htmlFor="firstName">
                  First name
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="border-b-2 w-full py-2"
                />
                <label className="text-sm font-bold mb-2" htmlFor="lastName">
                  my last name is
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Youremail@domain.com"
                  className="border-b-2 w-full py-2"
                />
                <label className="text-sm font-bold mb-2" htmlFor="email">
                  Contact me at
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="55555-55555"
                  className="border-b-2 w-full py-2"
                />
                <label className="text-sm font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="0 days"
                  className="border-b-2 w-full py-2"
                />
                <label className="text-sm font-bold mb-2" htmlFor="duration">
                  i’ll be there at
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="0 Person"
                  className="border-b-2 w-full py-2"
                />
                <label className="text-sm font-bold mb-2" htmlFor="guests">
                  how many i would come
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="checkInDate"
                  value={selectedDate.checkInDate ? format(selectedDate.checkInDate, 'MMMM dd, yyyy') : ''}
                  readOnly
                  className="border-b-2 w-full py-2"
                />
                <label className="text-sm font-bold mb-2" htmlFor="checkInDate">
                  Check-in Date
                </label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="checkOutDate"
                  value={selectedDate.checkOutDate ? format(selectedDate.checkOutDate, 'MMMM dd, yyyy') : ''}
                  readOnly
                  className="border-b-2 w-full py-2"
                />
                <label className="text-sm font-bold mb-2" htmlFor="checkOutDate">
                  Check-out Date
                </label>
              </div>
              <div className="col-span-1 md:col-span-2">
                <button type="submit" className="w-full h-[53px] border px-[32px] text-[10px] lg:text-[16px]">
                  Book the date
                </button>
              </div>
              {result && <div className="mt-4 text-center col-span-1 md:col-span-2">{result}</div>}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Menu_order;
