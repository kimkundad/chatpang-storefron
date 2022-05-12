import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import { Accordion } from 'react-bootstrap'
const QuestionBoxs = ({data = []}) => {
    if (data.length === 0) {
        return <></>
    } else {
      return data.map((obj,index) => {
            return (
                <Accordion key={index} className='questionBox'>
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>Q : {obj.question} ?</Accordion.Header>
                        <Accordion.Body>
                        {obj.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            )
        })
    }
}

export default QuestionBoxs