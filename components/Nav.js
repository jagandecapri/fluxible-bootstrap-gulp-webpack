'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;

var Bootstrap = require('react-bootstrap');
var Navbar = Bootstrap.Navbar;
var Nav = Bootstrap.Nav;
var NavItem = Bootstrap.NavItem;

class NavComponent extends React.Component {
    render() {
        const selected = this.props.selected;
        const links = this.props.links;

        const linkHTML = Object.keys(links).map(function (name) {
            var className = '';
            var link = links[name];

            if (selected === name) {
                className = 'pure-menu-selected';
            }

            return (
                <li className={className} key={link.path}>
                    <NavLink routeName={link.page}>{link.title}</NavLink>
                </li>
            );
        });

        return (
          <Navbar brand="Brand Name" fluid>
              <ul className="nav navbar-nav">{linkHTML}</ul>
          </Navbar>
        );
    }
}

Nav.defaultProps = {
    selected: 'home',
    links: {}
};

module.exports = NavComponent;
