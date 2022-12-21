
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

import React, { Component } from "react";

export default class NavDropdown extends Component {
  render() {
    return (
      <>
        <Nav variant="pills" activeKey="1">
          <Nav.Item>
            <Nav.Link href="/cryptocurrency/" eventKey="1" title="คริปโท">
              <a title="คริปโท">
                <h5> คริปโท</h5>
              </a>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="/exchangesranking" eventKey="2" >
              <a title="100 อันดับตลาดซื้อ-ขาย">
                <h5> 100 อันดับตลาดซื้อ-ขาย</h5>{" "}
              </a>
            </Link>
          </Nav.Item>
        </Nav>
      </>
    );
  }
}
