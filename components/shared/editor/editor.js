import React, { useState, useEffect, useRef } from 'react';
import font from '../../../styles/variables/font';
import EditorStyle from './style';

export default function Editor({ data, ...props }) {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('../../../modules/ckeditor5-build-with-htmlembed-master/build/ckeditor'),
    };
    setEditorLoaded(true);
  }, []);

  return (
    <EditorStyle>
      {editorLoaded ? (
        <CKEditor
          className="mt-3 wrap-ckeditor"
          editor={ClassicEditor}
          id="editor"
          data={data}
          {...props}
          disabled
          config={{
            toolbar: [],
            removePlugins: ['Heading'],
            isReadOnly: true,
          }}
        />
      ) : (
        'loading...'
      )}
    </EditorStyle>
  );
}
