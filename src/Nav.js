import React from "react";
import './index.css'

// const Nav = () => {
//     const arr = ['aaa','bbb','ccc']
//     return (
//         <nav>
//             <Elem value={arr[0]} />
//             <Elem value={arr[1]} />
//             <Elem value={arr[2]} />
//         </nav>
//     )
// }

// const Elem = (props) => {
//     return (
//         <Par value = {props.value} />
//     )
// }

// const Par = (props) => {
//     return (
//         <p>{props.value}</p>
//     )
// }

// class Nav extends React.Component {
//     render() {
//         const arr = ['abc','def','ghi']
//         return (
//             <nav>
//                 <Elem value={arr[0]} />
//                 <Elem value={arr[1]} />
//                 <Elem value={arr[2]} />
//             </nav>
//         )
//     }
// }
// class Elem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           value: this.props.value
//         };
//       }
//     render () {
//         return (
//             <Paragraph 
//             onClick={()=>this.setState({value:'xyz'})}
//             arr = {this.state.value}/>
//         )
//     }
// }
// class Paragraph extends React.Component {
//     render() {
//         return (
//             <p
//                 onClick={()=>this.props.onClick()}
//                 >
//                 {this.props.arr}
//             </p>
//         )
//     }
// }

class Nav extends React.Component {
    render() {
        const arr = ['click me','or me','or me!']
        return (
            <nav>
                <Elem value={arr[0]}/>
                <Elem value={arr[1]}/>
                <Elem value={arr[2]}/>
            </nav>
        )
    }
}

class Elem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value,
            flag: true
        }
    }
    render() {
        return (
            <Par 
            onClick = {()=>{
                let note = Object.assign({},this.state.value)
                this.state.flag ? note='changed' : note=this.props.value
                this.setState({
                    value:note,
                    flag: !this.state.flag
                })
            }}
            value= {this.state.value}/>
        )
    }
}

// class Elem extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: this.props.value,
//             flag: true
//         }
//     }
//     render() {
//         return (
//             <Par
//             onClick={()=>{
//                 this.setState(
//                     this.state.flag ? this.state.value='changed' : this.state.value = this.props.value,
//                     this.state.flag= !this.state.flag
//                 )            
//             }} value = {this.state.value}
//             />
//         )
//     }
// }

class Par extends React.Component {
    render() {
        return (
            <p
            onClick={()=>{this.props.onClick()}}>
                
                {this.props.value}
            </p>
        )
    }
}

export default Nav