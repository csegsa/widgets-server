import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import EventPageHeader from "components/Headers/EventPageHeader";
import DemoFooter from "components/Footers/DemoFooter.js";

function EventsPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <MainNavbar/>
      <EventPageHeader />
      <div className="main" style={{alignItems:'center'}}>
        <Col md="6">
        <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
        </Col>
      </div>
      <DemoFooter />
    </>
  );
}

export default EventsPage;
