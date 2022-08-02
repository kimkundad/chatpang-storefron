import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
const QAContainer = ({ data }) => {
  const [selected, setSelected] = useState([0])

  const onSelectedQA = (index) => {
    if (selected.includes(index)) {
        let arr = [...selected]
        arr = arr.filter(val => val !== index)
        setSelected(arr)
    }else{
        setSelected([...selected,index])
    }
  }
  if (data?.length === 0) {
    return <div>NO DATA</div>
  } else {
    return data?.map((item, index) => {
      return (
        <div key={index} className="qa-container" onClick={() => onSelectedQA(index)}>
          <div className="q-container">
            {item?.question}
            <div className="qa-icon">
              {selected.includes(index) ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
            </div>
          </div>
          {selected.includes(index) && <div className="a-container">{item?.answer}</div>}
        </div>
      )
    })
  }
}

export default QAContainer
