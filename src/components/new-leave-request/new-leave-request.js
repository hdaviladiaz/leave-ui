import React, {Component} from 'react';
import { Panel } from 'react-bootstrap';

export default class NewLeaveRequest extends Component {
  
  render() {
    return (
      <div>
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
