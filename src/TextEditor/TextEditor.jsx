import React, {useEffect, useState} from "react";
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorState, convertToRaw, convertFromRaw} from "draft-js";
// import { convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Data from "../Data/Data";

const TextEditor = () => {

  const [editorState, setEditorState] = useState(() => {
    return EditorState.createEmpty()
  })
  const [check, setCheck] = useState(false);
  const [data, setData] = useState([])
  const [mock, setMock] = useState('mock')
  let changeEditorState = (editorState) => {
    setEditorState(editorState);
  }

  const showData = () => {
    // const dataText = convertToRaw(editorState.getCurrentContent());
    const dataText = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    setData(() => {
      return {
        ...data,
        dataText
      }
    });

    setCheck(true);
    setMock(() => {
      return {
        ...data,
        dataText
      }
    });

  }

  useEffect(() => {
    if (mock !== 'mock') localStorage.setItem('myKey', JSON.stringify(data));
  }, [data])

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={changeEditorState}
      />
      <button onClick={showData}>Show</button>
      <div>

        <Data data={mock}/>
      </div>
    </div>
  )
}


export default TextEditor;