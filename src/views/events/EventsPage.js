import React from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js"
import EventPageHeader from "components/Headers/EventPageHeader"
import MainFooter from "components/Footers/MainFooter"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed
import listPlugin from '@fullcalendar/list'; //For List View



function EventsPage() {

  document.documentElement.classList.remove("nav-open");

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
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <MainFooter />
    </>
  )
}

export default EventsPage ;
