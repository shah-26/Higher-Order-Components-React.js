const WithClickTrackingProps = (props) => {
        const handleClick = () => {
            console.log("Tracking logged", props.trackingInfo)
        }
        return (
            <div onClick={handleClick}>
                {props.children}
            </div>
        )
} 
    
export default WithClickTrackingProps