import React from "react"
import { toSlug } from "../../helpers/slugs"

export default class Story extends React.Component {

  static defaultProps = {
    collection: [],
  }

  render() {
    return (
      <div className="col-xs-12">
        <ul className="story">
          <If condition={this.props.collection.length > 0}>
            {this.props.collection.map((action, key) => {
              return (
                <li
                  className={`story__action story--${action.action}`}
                  key={key}>
                  <Choose>
                    <When condition={action.action === "move"}>
                      <span className={`story__attacker actor--${toSlug(action.details.attacker.brand)}`}>{action.details.attacker.name}</span> hit&nbsp;
                      <span className={`story__defender actor--${toSlug(action.details.defender.brand)}`}>{action.details.defender.name}</span> with&nbsp;
                      <span className="story__move">{action.details.move.name}</span> for	&nbsp;
                      <span className="story__damage">{action.details.move.damage}</span> damage
                    </When>
                    <When condition={action.action === "winner"}>
                      <span className={`story__winner actor--${toSlug(action.details.winner.brand)}`}>{action.details.winner.name}</span> pins&nbsp;
                      <span className={`story__loser actor--${toSlug(action.details.loser.brand)}`}>{action.details.loser.name}</span> for the win!
                    </When>
                  </Choose>
                </li>
              )
            })}
          </If>
        </ul>
      </div>
    )
  }
}
