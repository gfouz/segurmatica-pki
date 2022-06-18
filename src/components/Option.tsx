import React from "react";
import styled from "styled-components";

interface OptionProps {
  value?: string;
  data?: string[];
}

function Option({ data}: OptionProps) {
  return (
    <>
      {data ? (
        data.map((value) => {
          return <option key={React.useId()} value={value}>{value}</option>;
        })
      ) : (
        <option></option>
      )}
    </>
  );
}

export default Option;
