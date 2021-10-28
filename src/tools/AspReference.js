import React from "react";

const AspReference = (props) => {
  var temp = "";

  const asp_quotes = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );

  const asp_author = (
    <div>
      <p>
        If you include author: in your query, Google will restrict your Google
        Groups results to include newsgroup articles by the author you specify.
        The author can be a full or partial name or email address. For example,
        <strong> [ children author:john author:doe ]</strong> or{" "}
        <strong> [ children author:doe@someaddress.com ]</strong> return
        articles that contain the word “children” written by John Doe or
        doe@someaddress.com.
      </p>
      <br></br>
      <p>
        Google will search for exactly what you specify. If your query contains
        [ author:”John Doe” ] (with quotes), Google won’t find articles where
        the author is specified as “Doe, John.”
      </p>
      <a
        href="http://www.googleguide.com/advanced_operators_reference.html#allintext"
        target="_blank"
        rel="noreferrer"
      >
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_group = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_insubject = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_cache = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_define = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_ext = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_filetype = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_id = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_inanchor = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_info = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_intext = (
    <div>
      <p>It's intext</p>
      <p>Lovely</p>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_intitle = (
    <div>
      <p>It's intitle:</p>
      <p>Great</p>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_inurl = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_link = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_location = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_related = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_site = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_source = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_allinanchor = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_allintext = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_allinurl = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_before = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  const asp_after = (
    <div>
      <a href="a" target="_blank" rel="noreferrer">
        <strong>Learn More</strong>
      </a>
    </div>
  );
  switch (props.value) {
    case `""`:
      temp = asp_quotes;
      break;
    case "author":
      temp = asp_author;
      break;
    case "group":
      temp = asp_group;
      break;
    case "insubject":
      temp = asp_insubject;
      break;
    case "cache":
      temp = asp_cache;
      break;
    case "define":
      temp = asp_define;
      break;
    case "ext":
      temp = asp_ext;
      break;
    case "filetype":
      temp = asp_filetype;
      break;
    case "id":
      temp = asp_id;
      break;
    case "inanchor":
      temp = asp_inanchor;
      break;
    case "info":
      temp = asp_info;
      break;
    case "intext":
      temp = asp_intext;
      break;
    case "intitle":
      temp = asp_intitle;
      break;
    case "inurl":
      temp = asp_inurl;
      break;
    case "link":
      temp = asp_link;
      break;
    case "location":
      temp = asp_location;
      break;
    case "related":
      temp = asp_related;
      break;
    case "site":
      temp = asp_site;
      break;
    case "source":
      temp = asp_source;
      break;
    case "allinanchor":
      temp = asp_allinanchor;
      break;
    case "allintext":
      temp = asp_allintext;
      break;
    case "allinurl":
      temp = asp_allinurl;
      break;
    case "before":
      temp = asp_before;
      break;
    case "after":
      temp = asp_after;
      break;

    default:
      break;
  }
  return temp;
};

export default AspReference;
