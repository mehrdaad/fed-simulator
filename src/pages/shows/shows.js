import React from "react"
import { Link } from "react-router"
import Helmet from "react-helmet"
import { connect } from "react-redux"
class ShowsPage extends React.Component {

  static propTypes = {
    shows: React.PropTypes.array.isRequired,
  }

  static contextTypes = {
    toSlug: React.PropTypes.func.isRequired,
  }

  displayName = "ShowsPage"

  render() {
    return (
      <div className="page shows">
        <Helmet title="Previous Shows" />
        <div className="inpage-content">
          <table className="table table-striped">
            <thead>
              <tr>
                <td>Show</td>
                <td># Matches</td>
                <td>Presented by</td>
              </tr>
            </thead>
            <tbody>
              {this.props.shows.map((show, key) => {
                return (
                  <tr key={key}>
                    <td>
                      <Link to={{ pathname: 'show/', query: { id: show.id } }}>
                        {show.PPV.name}
                      </Link>
                    </td>
                    <td>{show.matches.length}</td>
                    <td>{show.brand.name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  shows: state.shows,
}))(ShowsPage)
