// TODO
var App = () => (
  <>
  <div>
    <h2>My Grocery List</h2>
    <GroceryList  gList = {['Cucumber', 'Kale', ' Carrot']}/>
</div></>

);


var GroceryList = (props) => {

  var onListItemClick = (event) => {
    console.log('I got clicked');
  }
  return (
    <ul>
      {props.gList.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
)
  }
class GroceryListItem extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      done: false
    }
  }
  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemLeave() {
    this.setState({
      done: !this.state.done
    });
  }

  render () {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal',
    }

    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)}  onMouseLeave={this.onListItemLeave.bind(this)}>{this.props.item} </li>

    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));


