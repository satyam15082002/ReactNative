import { Component } from "react";
import { connect } from "react-redux";
import Logout from "./Logout";
import Login from "./Login";
class Account extends Component
{
    render()
    {
        return(this.props.user.login)?<Logout/>:<Login/>
    }
}

const mapStateToProps=(state)=>({
    user:state.user,
  })

export default connect(mapStateToProps,null)(Account);