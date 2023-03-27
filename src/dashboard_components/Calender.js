import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export const Calender = () => {
    const [selected, setSelected] = React.useState();
    return (
      React.createElement(DayPicker, { mode: "single", selected: selected, onSelect: setSelected })
      );
}
