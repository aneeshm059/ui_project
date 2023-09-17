import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Collapse } from 'antd';
import UilPlay from '@iconscout/react-unicons/icons/uil-play';
import UilPlus from '@iconscout/react-unicons/icons/uil-plus';
import UilMinus from '@iconscout/react-unicons/icons/uil-minus';
import UilBook from '@iconscout/react-unicons/icons/uil-book-alt';
import UilClock from '@iconscout/react-unicons/icons/uil-clock';
import UilAward from '@iconscout/react-unicons/icons/uil-award';
import UilSync from '@iconscout/react-unicons/icons/uil-sync';
import ModalVideo from 'react-modal-video';
import { CourseDetailsWrap } from './Style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, CollapseStyleWrap } from '../styled';
import { Button } from '../../components/buttons/buttons';
import '../profile/myProfile/overview/video-modal.css';

const { Panel } = Collapse;
const PageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'course',
    breadcrumbName: 'Courses',
  },
];

const lectures = [
  {
    id: '1',
    title: 'Robotics',
    classes: [
      {
        id: '1',
        classTitle: 'Introduction to Robotics',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Hisotry of Robotics',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'New Trends and Innovation',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '2',
    title: 'Web Development',
    classes: [
      {
        id: '1',
        classTitle: 'Introduction to Web',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'HTML Basics',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'JavaScript Basics',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '3',
    title: 'Design Fundamental',
    classes: [
      {
        id: '1',
        classTitle: 'Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '4',
    title: 'Colour Theory',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '5',
    title: 'Typography',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '6',
    title: 'Live Project 01',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
  {
    id: '7',
    title: 'Live Project 02',
    classes: [
      {
        id: '1',
        classTitle: 'Course Introduction',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '2',
        classTitle: 'Demand of UI/UX Design',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
      {
        id: '3',
        classTitle: 'Tools',
        videoId: 'L61p2uyiMSo',
        duration: '5',
      },
    ],
  },
];

function CourseDetails() {
  const path = '/student';
  const [isOpen, setOpen] = useState(false);

  return (
    <CourseDetailsWrap>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <PageHeader className="ninjadash-page-header-main" title="Course " routes={PageRoutes} />
      <Main>
        <Row gutter={25}>
          <Col lg={12} xs={24}>
            <div className="ninjadash-course-details-wrap">
              <div className="ninjadash-course-content">
                <h2 className="ninjadash-course-content-top-title">AI and Coding Masters Course</h2>
                <h2 className="ninjadash-course-content__title">About This Course </h2>
                <p>
                  User interface design or user interface engineering is the design of user interfaces for machines and
                  software, such as computers, home appliances, mobile devices, and other electronic devices, with the
                  focus on maximizing usability and the user experience.
                </p>
                <h2 className="ninjadash-course-content__title">Course content </h2>
                <div className="ninjadash-course-content__lectures">
                  <CollapseStyleWrap>
                    <Collapse
                      bordered={false}
                      defaultActiveKey={['1']}
                      expandIcon={({ isActive }) => (isActive ? <UilMinus /> : <UilPlus />)}
                    >
                      {lectures.map((lecture) => (
                        <Panel
                          header={lecture.title}
                          key={lecture.id}
                          extra={
                            <>
                              <span>03 Lectures</span>
                            </>
                          }
                        >
                          <ul>
                            {lecture.classes.map((singleClass, index) => (
                              <li key={index}>
                                <Link
                                  className="ninjadash-course-content__lecture--single"
                                  onClick={() => setOpen(true)}
                                  to={`${path}/studentclassdetails`} state={{ fromCourse: {id: singleClass.id, title: singleClass.classTitle} }}
                                >
                                  <UilPlay />
                                  <span className="ninjadash-course-content__lecture--title">
                                    {singleClass.classTitle}
                                  </span>
                                  <div className="ninjadash-course-content__lecture--extra">
                                    <p>Pre-Assignment</p>&nbsp;&nbsp;
                                    <p>Post-Assignment</p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Panel>
                      ))}
                    </Collapse>
                  </CollapseStyleWrap>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Main>
    </CourseDetailsWrap>
  );
}

export default CourseDetails;
