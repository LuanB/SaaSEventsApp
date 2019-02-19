import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import CreateSurvey from './CreateSurvey';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const HeaderGrid = styled.div`
  ${
    '' /* display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  ${'' /* grid-template-columns: auto auto auto auto auto; */
  } */}

`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  letter-spacing: 3px;
  ${({ selected }) => selected && 'color: black'};
`;

const LoginLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  ${'' /* letter-spacing: 3px; */} ${({ selected }) =>
    selected && 'color: black'};
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #ccc;
  letter-spacing: 3px;
  ${({ selected }) => selected && 'color: black'};
  margin: auto;
`;

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <nav>
            <ul className="navmenu">
              <li>
                <LogoLink
                  selected={true}
                  to={this.props.auth ? '/surveys' : '/'}
                >
                  SaaS Attendance App
                </LogoLink>
              </li>
              <li>
                <a href="/auth/google">Login With Google</a>
              </li>
            </ul>
          </nav>
        );
      default:
        return (
          <nav>
            <ul className="navmenu">
              <li>
                <LogoLink
                  selected={true}
                  to={this.props.auth ? '/surveys' : '/'}
                >
                  SaaS Attendance App
                </LogoLink>
              </li>

              <li>
                <Payments />
              </li>
              <li>
                {/* <li key="3" style={{ margin: '0 10px' }}> */}
                Credits: {this.props.auth.credits}
              </li>
              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </ul>
          </nav>
        );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
