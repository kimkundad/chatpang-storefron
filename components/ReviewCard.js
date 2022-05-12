import { Card } from 'react-bootstrap'

const ReviewCard = ({data = []}) => {
    if (data.lenth === 0) {
        return <></>
    } else {
        return data.map((obj,index)=>{
           return (
               <div key={index} className={`Card`}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={340} src="https://images.unsplash.com/photo-1581869054729-d43f3ebe3b8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                        <Card.Body>
                            <Card.Title>{obj.name}i</Card.Title>
                            <Card.Text>
                            {obj.review.length > 30 ? obj.review.substring(0,31)+"...": obj.review}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
    }
}

export default ReviewCard