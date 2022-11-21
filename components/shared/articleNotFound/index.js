import React from 'react';
import ArticleNotFoundStyle from './style';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Image } from 'react-bootstrap';

function ArticleNotFound() {
  return (
    <ArticleNotFoundStyle>
      <div>
        <Image className="img-logo" src="/images/icon/idea.png" />
      </div>
      <div className="text-not-found">ไม่พบบทความ</div>
    </ArticleNotFoundStyle>
  );
}

export default ArticleNotFound;
