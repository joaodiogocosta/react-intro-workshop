// Define the React Component
var BarList = React.createClass({
  render: function() {
    return (
      <div>
        <div className='bar'>
          <span className='name'>NB</span>
          <span className='votes'>10</span>
        </div>
        <div className='bar'>
          <span className='name'>Moelas</span>
          <span className='votes'>100</span>
        </div>
        <div className='bar'>
          <span className='name'>Piano</span>
          <span className='votes'>55</span>
        </div>
      </div>
    );
  }
});

// Get HTML container where we will mount the React Component
var barListEl = document.getElementById('bar-list');

// Render the React Component
ReactDOM.render(<BarList />, barListEl);
