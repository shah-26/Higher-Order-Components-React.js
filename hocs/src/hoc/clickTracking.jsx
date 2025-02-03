const withClickTracking = (WrappedComponent) => {
    const wrappedComponent = (props) => {
        const handleClick = () => {
            console.log("Clicked Tracked Component: ",props.trackingInfo)
        }
        return (
            <div onClick={handleClick}>
                <WrappedComponent {...props} />
            </div>
        )
    }
    return wrappedComponent
}

export default withClickTracking;