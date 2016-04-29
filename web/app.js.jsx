// Define the React Component
var BarList = React.createClass({

  getInitialState: function() {
    var bars = [
      {
        name: 'Moelas',
        votes: 100
      },
      {
        name: 'NB',
        votes: 50
      },
      {
        name: 'Bigorna',
        votes: 110
      },
      {
        name: 'Whats Up Doc',
        votes: 12
      }
    ];

    return { bars: bars };
  },

  renderBars: function() {
    var bars = this.state.bars;

    return bars.map(function(bar) {
      return (
        <div className='bar' key={bar.name}>
          <span className='name'>{bar.name}</span>
          <span className='votes'>{bar.votes}</span>
        </div>
      );
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        {this.renderBars()}
      </div>
    );
  }
});

// Get HTML container where we will mount the React Component
var barListEl = document.getElementById('bar-list');

// Render the React Component
ReactDOM.render(<BarList />, barListEl);
