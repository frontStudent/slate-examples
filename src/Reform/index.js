import React, { useState, useEffect, useCallback, useMemo } from "react";
import RichTextExample from "./RichText";
import { Button } from "antd";


const RichText = () => {
  const [initialValue, setInitialValue] = useState([
    {
      type: "paragraph",
      children: [
        { text: "This is editable " },
        { text: "rich", bold: true },
        { text: " text, " },
        { text: "much", italic: true },
        { text: " better than a " },
        { text: "<textarea>", code: true },
        { text: "!" },
      ],
    },
  ]);
  
  return (
    <>
      {/* <Button
        onClick={() =>
          setInitialValue((prev) => [
            ...prev,
            {
              type: "paragraph",
              align: "center",
              children: [{ text: "Try sssssssssssssffffffff" }],
            },
          ])
        }
      >
        set initialValue
      </Button> */}
      <RichTextExample initialValue={initialValue} />
    </>
  );
};

export default RichText;
