
const Watch = ({props}) => {
    return (
        <div style={{
            border: '2px solid red',
            margin : '20px'
        }}>
            {/* <h1>Watch component</h1> */}
            <h4>{props.id}</h4>
            <h4>{props.name}</h4>
            <h4>{props.price}</h4>
        </div>
    );
    }
export default Watch;