import Button from './components/Button'
import withClickTracking from './hoc/clickTracking'
import WithClickTrackingProps from './hoc/propsClickTracking'
import './App.css'

function App() {
  const ButtonWithTracking = withClickTracking(Button)


  return (
    <>
      <div>
        <ButtonWithTracking label="Click Me" trackingInfo="Button 1" />
        <WithClickTrackingProps trackingInfo="Button 2">
            <Button label="Click Me Too" />
        </WithClickTrackingProps>
      </div>
    </>
  )
}

export default App
