import React from "react";

const Generate = (props) => {
  var temp = props.input;

  if (temp !== "") {
    switch (props.dork) {
      case `""`:
        temp = `"${temp}"`;
        break;
      case "author":
        temp = `author:"${temp}"`;
        break;
      case "group":
        temp = `group:"${temp}"`;
        break;
      case "insubject":
        temp = `insubject:"${temp}"`;
        break;
      case "cache":
        temp = `cache:"${temp}"`;
        break;
      case "define":
        temp = `define:"${temp}"`;
        break;
      case "ext":
        temp = `ext:"${temp}"`;
        break;
      case "filetype":
        temp = `filetype:"${temp}"`;
        break;
      case "id":
        temp = `id:"${temp}"`;
        break;
      case "inanchor":
        temp = `inanchor:"${temp}"`;
        break;
      case "info":
        temp = `info:"${temp}"`;
        break;
      case "intext":
        temp = `intext:"${temp}"`;
        break;
      case "intitle":
        temp = `intitle:"${temp}"`;
        break;
      case "inurl":
        temp = `inurl:"${temp}"`;
        break;
      case "link":
        temp = `link:"${temp}"`;
        break;
      case "location":
        temp = `location:"${temp}"`;
        break;
      case "related":
        temp = `related:"${temp}"`;
        break;
      case "site":
        temp = `site:"${temp}"`;
        break;
      case "source":
        temp = `source:"${temp}"`;
        break;
      case "allinanchor":
        temp = `allinanchor:"${temp}"`;
        break;
      case "allintext":
        temp = `allintext:"${temp}"`;
        break;
      case "allinurl":
        temp = `allinurl:"${temp}"`;
        break;
      case "before":
        temp = `before:"${temp}"`;
        break;
      case "after":
        temp = `after:"${temp}"`;
        break;

      default:
        break;
    }
    var dtVal = props.dt;
    // It is compalsary to add space in the condition
    //  to avoid difficulty while adding individual quote
    //   dork because every dork is apparently having quotes included
    if (!dtVal.includes(` ${temp}`)) {
      props.df(`${dtVal} ${temp}`);
    }
  }

  var tempLink = "";

  if (props.dt !== "") {
    tempLink = `https://www.google.com/search?q=`;
    var t = props.dt;
    function linkGenerate() {
      // i starts from 1 because their is unusual space at start
      // length is displaying +1 (unusual)
      for (var i = 1; i < t.length; i++) {
        if (t[i] === ` `) {
          tempLink = `${tempLink}+`;
        } else if (t[i] === `"`) {
          tempLink = `${tempLink}%22`;
        } else if (t[i] === `:`) {
          tempLink = `${tempLink}%3A`;
        } else {
          tempLink += t[i];
        }
      }
    }
    linkGenerate();
  }

  return (
    <div
      style={{
        display: "grid",
        height: "calc(100%)",
        gridTemplateRows: "auto 1fr",
        alignContent: "end",
        alignItems: "end",
      }}
    >
      <div>{props.dt}</div>
      <br></br>
      <div>{tempLink}</div>
    </div>
  );
};

export default Generate;
