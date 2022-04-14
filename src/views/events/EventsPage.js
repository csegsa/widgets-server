import React , {useState} from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Button,
  Card
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
  var eventInfo = "" ;
  const [selectedEvent, setSelectedEvent] = useState("hi") ;
  if(selectedEvent === "") {
     eventInfo = <h3>No event Selected</h3>
  }
  else {
     eventInfo = <h3>One Event Selected</h3>
  }
  console.log(eventInfo) ;

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
              <Col md="8">
                <FullCalendar
                  plugins={[ dayGridPlugin, interactionPlugin, listPlugin ]}
                  initialView="listWeek"
                  headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,listWeek'
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
              <Col md="4">
                <Card className="ml-auto mr-auto">
                <div className="card-body">
                <h3 className="card-title">Sample Event</h3>
                <h6 class="card-subtitle mb-2 text-muted">Event subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="card-text"><b>Venue:</b></p>
                <p class="card-text"><b>Time:</b></p>
                <a href="#" class="btn btn-success">RSVP</a>
                </div>
                </Card>
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
