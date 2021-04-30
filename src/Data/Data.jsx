import React, {useEffect, useState} from "react";
import {convertFromRaw, EditorState, convertToRaw, convertFromHTML} from 'draft-js';
import draftToHtml from "draftjs-to-html";

const Data = (props) => {
  const [parseData, setParseData] = useState(props.data.dataText || JSON.parse(localStorage.getItem('myKey'))?.dataText);

  useEffect(() => {
    props.data.dataText && setParseData(props.data.dataText)
    console.log(parseData)
    console.log(props.data.dataText)
  }, [props.data.dataText])

  return (
    <>
      {parseData && <div className='content' dangerouslySetInnerHTML={{__html: parseData}}/>}
    </>
  )
  // }

}

export default Data;