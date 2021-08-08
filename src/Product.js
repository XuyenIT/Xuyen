import React from "react";

class Product extends React.Component {
    constructor(props) {
        console.log("contructor");
        super(props);
        this.state = {
            name:111,
            image:222,
            price:333,
            
        }
    }
componentDidMount(){
    fetch('https://fakestoreapi.com/products/'+this.props.id)
    .then(res=>res.json())
    .then(data=>this.initData(data));
    console.log("Did mount");
}
initData = (data)=>{
    this.setState({
        name:data.title,
        price:data.price,
        image:data.image
        
    });
}
componentDidUpdate(){
    console.log("update")
}
    
    render() {
        console.log("render")
        return (
            <div style = {{ width:'25%',border:"1px solid blue",borderRadius:'8px',display:'flex',
            flexDirection:'column',alignItems:'center',backgroundColor:'lightblue'}}>
                <h2 style = {{textAlign:'center'}}>{this.state.name}</h2>
                <img style = {{width:'60%',height:'250px'}} src = {this.state.image} alt = {this.state.name}/>
                <h3>{this.state.price}$</h3>
                <button style = {{width:'100px',marginBottom:'20px'}}>Buy</button>
            </div>
        );
    }
}

export default Product;
