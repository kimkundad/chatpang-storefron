import { Container, Grid, Typography } from '@mui/material';
import React,{ useEffect,  useState } from 'react';
import { Image } from 'react-bootstrap';
import * as constants from '../../../constants/questionConstants';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionContainerStyle from './style';
import classNames from 'classnames';
import useWindowSize from '../../../modules/windowSize';
import axios from 'axios';

const QuestionContainer = React.forwardRef((props, ref) => {
  const [questions, setQuestions] = useState([])

  const [open, setOpen] = React.useState({ 1: true, 2: false, 3: false });
  let size = useWindowSize();

  const handleClick = (index) => {
    let openTemp = open;
    openTemp[index] = !openTemp[index];
    setOpen((prev) => ({ ...prev, ...openTemp }));
  };

  async function getQuestions() {
    try {
      const res = await axios('https://app.chatpang.co/public/questions')
      setQuestions(res.data.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])
  
  return (
    <QuestionContainerStyle className="bg" ref={ref} navHeight={props.navHeight} screenWidth={size.width}>
      <div className="app-container">
        <div className="question-wrapper">
          <Grid container direction="row" spacing="2" textAlign="center" display="block" className="header-text-page">
            <Typography variant="h4" display="flex" justifyItems="center" justifyContent="center" alignItems="center">
              <Image src="/images/icon/questionLogo.png" fluid className="header-icon" />
              {constants.HEADER_PAGE_TEXT}
            </Typography>
          </Grid>
          <Container className="question-zone" maxWidth="xxl">
            <Grid container direction="row" display="block" spacing="2" alignContent="center" alignItems="center">
              <Grid container item direction="column" sm={12} xs={12} md={12} lg={12} xl={12}>
                {questions.map((item, index) => (
                  <div key={`Question_${item.key}`}>
                    <div className="quest-header" onClick={() => handleClick(index + 1)}>
                      <span>{item?.question}</span>
                      <span className="icon-expand">{open[index + 1] ? <ExpandLessIcon /> : <ExpandMoreIcon />}</span>
                    </div>

                    <div className={classNames('quest-answer', { 'close-answer': !open[index + 1] })}>
                      <div className="tab-color"></div>
                      <span style={{ padding: '1%' }}>
                        <div>{item?.answer}</div>
                      </span>
                    </div>
                  </div>
                ))}
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </QuestionContainerStyle>
  );
});

export default QuestionContainer;
