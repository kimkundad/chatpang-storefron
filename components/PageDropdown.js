import React from 'react'
import { Form } from 'react-bootstrap'
import useUser from '../Hooks/useUser'

const PageDropdown = (onSelect) => {
  const { user } = useUser()

  const renderPageOption = () => {
    if (user?.selectedPage.length === 0) {
      return <option>คุณยังไม่ได้เลือกเพจ</option>
    } else {
      return user?.selectedPage.map((item, index) => {
        return (
          <option key={index} value={item?.page_id}>
            {item?.name}
          </option>
        )
      })
    }
  }
  return (
    <Form.Select onChange={(e) => onSelect(e.target.value)} disabled={user?.selectedPage.length === 0}>
      {/* <Image src={user?.selectedPage[0].pageImageUrl} alt="pageLogo" /> */}
      {renderPageOption()}
    </Form.Select>
  )
}

export default PageDropdown
