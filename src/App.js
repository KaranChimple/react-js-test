import React, { PureComponent } from 'react';
import { Button } from '@material-ui/core';
import { Counter } from './counter';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 0,
    };
  }

  componentDidMount() {
    const value1 = localStorage.getItem('count1');
    const value2 = localStorage.getItem('count2');
    if (value1)
      this.setState({ count1: value1 });
    if (value2)
      this.setState({ count2: value2 });
  }

  incrementCount1 = () => {
    const { count1, count2 } = this.state;
    if (count1 <= 10) {
      this.setState({
        count1: Number(count1) + 1,
      }, () => {
        localStorage.setItem('count1', Number(count1) + 1);
      });
    } else {
      this.setState({
        count2: Number(count2) + 1,
      }, () => {
        localStorage.setItem('count2', Number(count2) + 1);
      })
    }
  };

  incrementCount2 = () => {
    const { count2 } = this.state;
    this.setState({
      count2: Number(count2) + 1,
    }, () => {
      localStorage.setItem('count2', Number(count2) + 1);
    });
  }

  decrementCount1 = () => {
    const { count1, count2 } = this.state;
    if (count1 >= 1) {
      this.setState({
        count1: Number(count1) - 1,
      }, () => {
        localStorage.setItem('count1', Number(count1) - 1);
      });
    } else {
      if (count2 >= 1)
        this.setState({
          count2: Number(count2) - 1
        }, () => {
          localStorage.setItem('count2', Number(count2) - 1)
        });
    }
  };

  decrementCount2 = () => {
    const { count2 } = this.state;
    if (count2 >= 1) {
      this.setState({
        count2: Number(count2) - 1,
      }, () => {
        localStorage.setItem('count2', Number(count2) - 1);
      });
    }
  }


  render() {
    const { count1, count2 } = this.state;
    return (
      <div>
        <div style={styles.parentContainer}>
          <div style={styles.rowAlignedContainer}>
            <Button color="primary" variant="contained" className="clicks-count-one" onClick={this.incrementCount1}>Increment First Counter</Button>
          </div>
          {count1 <= 10 && <Counter counter={count1} />}
          {count1 > 10 && <Counter counter={'0'} />}
          <div style={styles.rowAlignedContainer}>
            <Button color="primary" variant="contained" onClick={this.decrementCount1}>Decrement First Counter</Button>
          </div>
        </div>
        <hr />
        <div style={styles.parentContainer}>
          <div style={styles.rowAlignedContainer}>
            <Button color="primary" variant="contained" className="clicks-count-two" onClick={this.incrementCount2}>Increment Second Counter</Button>
          </div>
          <Counter counter={count2} />
          <div style={styles.rowAlignedContainer}>
            <Button color="primary" variant="contained" onClick={this.decrementCount2}>Decrement Second Counter</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

const styles = {
  parentContainer: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  rowAlignedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
}