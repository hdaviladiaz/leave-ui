import React, {Component} from 'react';
import Overview from '../overview/overview.js';
import { Panel } from 'react-bootstrap';

export default class ClassName extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Overview days={15} lastRequest={'15-06-2017'}/>

          <Panel className="leave-request">
            <div>
                <div className="form-group">
                  <label className="col-md-4 control-label" for="Thoughtworker ">Thoughtworker</label>
                  <div className="col-md-4">
                    <input id="Thoughtworker " name="Thoughtworker" type="text" placeholder="Thoughtworker" className="form-control input-md" />
                  </div>
                </div>
            </div>
          </Panel>

      </div>
    );
  }
}
