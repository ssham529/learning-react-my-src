import React from 'react';
import Responsive from '../components/common/Responsive';
// import EditorContainer from '../containers/write/EditorContainer';
// import TagBoxContainer from '../containers/write/TagBoxContainer';
// import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import Editor from '../components/write/Editor';

const WritePage = () => {
  return (
    <Responsive>
        <Editor />
      {/* <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer /> */}
    </Responsive>
  );
};

export default WritePage;
