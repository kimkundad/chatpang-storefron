import React from 'react'
import { Form } from 'react-bootstrap'
import useUser from '../Hooks/useUser'

const PageDropdown = ({ onSelect, defaultValue }) => {
  const { user } = useUser()
  const renderPageOption = () => {
    if (user?.pages.length === 0) {
      return <option>คุณยังไม่ได้เลือกเพจ</option>
    } else {
      return user?.pages.map((item, index) => {
        return (
          item?.status ==="active"&&
          <option key={index} value={item?.id}>
            {item?.name}
          </option>
        )
      })
    }
  }
  return (
    <Form.Select defaultValue={defaultValue || user?.selectedPage} onChange={(e) => onSelect(e.target.value)} disabled={user?.pages.length === 0}>
      {/* <Image src={user?.selectedPage[0].pageImageUrl} alt="pageLogo" /> */}
      {renderPageOption()}
    </Form.Select>
  )
}

export default PageDropdown
