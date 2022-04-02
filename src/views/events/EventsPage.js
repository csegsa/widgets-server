<<<<<<< HEAD
import React, {useState} from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

=======
import React from "react"

// reactstrap components
import { Container, Row, Col } from "reactstrap"

import FullCalendar from "@fullcalendar/react" // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid" // a plugin!

>>>>>>> 77b4663fe92a59ef76847d4540a974d7ee4f9c9d
// core components
import MainNavbar from "components/Navbars/MainNavbar.js"
import EventPageHeader from "components/Headers/EventPageHeader"
import MainFooter from "components/Footers/MainFooter"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed
import listPlugin from '@fullcalendar/list'; //For List View



function EventsPage() {
<<<<<<< HEAD

  document.documentElement.classList.remove("nav-open");
=======
  document.documentElement.classList.remove("nav-open")
>>>>>>> 77b4663fe92a59ef76847d4540a974d7ee4f9c9d
  React.useEffect(() => {
    document.body.classList.add("profile-page")
    return function cleanup() {
      document.body.classList.remove("profile-page")
    }
  })
  return (
    <>
      <MainNavbar />
      <EventPageHeader />
      <div className='main'>
        <div className='section text-center'>
          <Container>
            <Row>
<<<<<<< HEAD
              <Col md="9">
                <FullCalendar
                  plugins={[ dayGridPlugin, interactionPlugin, listPlugin ]}
                  initialView="listWeek"
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                  }}
                  events={[
                    { title: 'event 1', date: '2022-04-13' },
                    { title: 'event 2', date: '2022-04-09' },
                    { title: 'event 2', date: '2022-04-09' },
                    { title: 'event 2', date: '2022-04-09' },
                    { title: 'event 2', date: '2022-04-12' },
                    { title: 'event 2', date: '2022-04-13' },
                    { title: 'event 2', date: '2022-04-15' }
                  ]}
                />
=======
              <Col md='6'>
                <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' />
>>>>>>> 77b4663fe92a59ef76847d4540a974d7ee4f9c9d
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <MainFooter />
    </>
  )
}

export default EventsPage
