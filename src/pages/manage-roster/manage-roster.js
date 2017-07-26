import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

import Wrestlers from "../../components/wrestlers/container"
import Input from "../../components/form/input"
import Image from "../../components/form/image"
import HeaderOne from "../../components/h1/h1"

import "./manage-roster.scss"

const NOOP = () => {}

const UpdateWrestlersPage = ({
  showWrestlersFilters = false,
  currentWrestler = null,
  onWrestlerPointsUpdated = NOOP,
  onWrestlersNameUpdated = NOOP,
  onImageUpdated = NOOP,
  onWrestlerDelete = NOOP,
  onWrestlerClick = NOOP,
}) => {
  return (
    <div className="page manage-roster">
      <Helmet title="Update the Wrestlers!" />
      <HeaderOne>Manage your Wrestlers</HeaderOne>
      <div className="row">
        <If condition={!currentWrestler}>
          <p>Click a wrestler to edit them!</p>
        </If>
        <div className="col-xs-12">
          <Wrestlers
            onWrestlerClick={onWrestlerClick}
            showFilter={showWrestlersFilters}
          />
        </div>
      </div>
      <If condition={currentWrestler}>
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Points</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Input
                        onChange={onWrestlersNameUpdated}
                        value={currentWrestler.name}
                      />
                    </td>
                    <td>
                      <Input
                        onChange={onWrestlerPointsUpdated}
                        value={currentWrestler.points}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="box center-xs">
              <Image
                name="image"
                value={currentWrestler.image}
                onChange={onImageUpdated}
              />
            </div>
            <br />
            <div className="box center-xs">
              <button onClick={onWrestlerDelete}>
                Click here to delete this wrestler
              </button>
            </div>
          </div>
        </div>
      </If>
    </div>
  )
}

UpdateWrestlersPage.propTypes = {
  showWrestlersFilters: PropTypes.bool,
  currentWrestler: PropTypes.object,
  onWrestlerPointsUpdated: PropTypes.func.isRequired,
  onWrestlersNameUpdated: PropTypes.func.isRequired,
  onImageUpdated: PropTypes.func.isRequired,
  onWrestlerClick: PropTypes.func.isRequired,
}

export default UpdateWrestlersPage
