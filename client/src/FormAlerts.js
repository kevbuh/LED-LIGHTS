import React from 'react'
import TransitionAlerts from './MAlerts'

class FormAlerts extends React.Component {


  // constructor(props){
  //   super(props)
  //   this.state = {apiResponse:""}
  // }

  // callAPI(){
  //   fetch("http://localhost:9009/")
  //     .then(res => res.text())
  //     .then(res => this.setState({apiResponse: res.locals})),
  //   fetch("https://localhost:9009/users")
  //     .then()
  // }

  // componentWillMount(){
  //   this.callAPI()
  // }

  // // ifError = () => {if(typeof errors != 'undefined'){   
  // //         errors.forEach((error) => { 
  // //             <TransitionAlerts name={this.state.res.locals.error} />
  // //             })} }

  // // ifSuccess = () => {if(success_msg != '') { 
  // //                 <TransitionAlerts name={this.state.res.locals.success_msg} />
  // //             } }

  // // ifErrorMsg = () => {if(error_msg != '') { 
  // //                 <TransitionAlerts name={this.state.res.locals.error_msg} />
  // //             } }

  // // ifErrorLast = () => {if(error != '') { 
  // //                 <TransitionAlerts name={this.state.res.locals.error} />
  // //             } }

  render() {
    return (
        <div>
          {/* <p>{this.state.res.locals.success_msg}</p> */}
          <p> TODO: Form Validation </p>
          

              

              

              
        </div>
      )
  }
}


export default FormAlerts
