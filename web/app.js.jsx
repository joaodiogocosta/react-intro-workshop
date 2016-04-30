var Bar = React.createClass({
  propTypes: {
    bar: React.PropTypes.object
  },

  render: function() {
    var bar = this.props.bar;

    return (
      <div className='bar'>
        <span className='name'>{bar.name}</span>
        <span className='votes'>{bar.votes}</span>
      </div>
    );
  }
});


var BarList = React.createClass({
  propTypes: {
    bars: React.PropTypes.array
  },

  renderBars: function() {
    return this.props.bars.map(function(bar) {
      return (
        <Bar bar={bar} key={bar.name} />
      );
    }.bind(this));
  },

  render: function() {
    return (
      <div>{this.renderBars()}</div>
    );
  }
});


var OrderBox = React.createClass({
  propTypes: {
    orderByVotes: React.PropTypes.func
  },

  render: function() {
    return (
      <div className="order-bars-wrapper">
        Order by: <button id="order-by-votes-button" onClick={this.props.orderByVotes}>Votes</button>
      </div>
    );
  }
})


var BarApp = React.createClass({

  getInitialState: function() {
    return { bars: [] };
  },

  componentDidMount: function() {
    $.getJSON('data.json', function(data) {
      this.setState({ bars: data.bars });
    }.bind(this));
  },

  orderByVotes: function() {
    var bars = this.state.bars;

    var orderedBars = bars.sort(function(a, b) {
      return b.votes - a.votes;
    });

    this.setState({ bars: orderedBars });
  },

  render: function() {
    return (
      <div>
        <OrderBox orderByVotes={this.orderByVotes} />
        <BarList bars={this.state.bars} />
      </div>
    );
  }
});


// Get HTML container where we will mount the React Component
var barListEl = document.getElementById('bar-list');


// Render the React Component
ReactDOM.render(<BarApp />, barListEl);
