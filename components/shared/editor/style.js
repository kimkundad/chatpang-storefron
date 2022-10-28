import styled from 'styled-components';

const EditorStyle = styled.div`
  cursor: default;
  .ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
    border: none;
  }

  .ck-editor__top {
    display: none;
  }
`;

export default EditorStyle;
