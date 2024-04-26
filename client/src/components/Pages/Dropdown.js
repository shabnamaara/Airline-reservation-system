// Dropdown.js

import React from "react";

const Dropdown = ({ data, label, register, name, errors }) => {
  return (
    <div className="relative">
      <p className="font-bold text-xl uppercase">{label}</p>
      <select
        style={{ marginTop: "-15px" }}
        className={`w-full h-16 text-2xl pl-20 rounded-lg ${errors[name] &&
          " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
        {...register(name, {
          required: {
            value: true,
            message: `${label} is required`,
          },
        })}
      >
        <option value="" disabled hidden>
          --Select Airport--
        </option>
        {data.map((item, index) => (
          <option key={index} value={item.airport_name}>
            {item.airport_name}
          </option>
        ))}
      </select>
      <div>
        {errors[name] && (
          <span className="text-sm text-red-500">{errors[name].message}</span>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
