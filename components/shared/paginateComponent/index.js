import { Pagination, PaginationItem } from '@mui/material';

import React, { useEffect, useState } from 'react';
import color from '../../../styles/variables/color';
import PaginateComponentStyle from './style';

const PaginateComponent = React.forwardRef((props, ref) => {
  const [page, setPage] = useState(1000);
  useEffect(() => {
    setPage(props.totalPage);
  }, [props.totalPage]);
  return (
    <PaginateComponentStyle>
      <Pagination
        count={props.totalPage ? parseInt(page) : 100}
        page={props.activePage}
        onChange={props.onChange}
        siblingCount={0}
        //boundaryCount={1}
        variant="text"
        shape="rounded"
        color="primary"
      />
    </PaginateComponentStyle>
  );
});

export default PaginateComponent;
