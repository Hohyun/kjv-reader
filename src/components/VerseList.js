import React from "react";

const VerseList = (props) => {
  const renderList = () => {
    return props.verses.map((verse) => {
      const ref =
        (props.lang === "eng" ? verse.book1 : verse.book2) +
        " " +
        verse.chapter +
        ":" +
        verse.verse;
      const words =
        props.lang === "eng" ? " " + verse.words1 : " " + verse.words2;

      return (
        <div key={ref} className="item">
          <div className="ui horizontal label">{ref}</div>
          {words}
        </div>
      );
    });
  };

  return <div className="ui divided list">{renderList()}</div>;
};

export default VerseList;
