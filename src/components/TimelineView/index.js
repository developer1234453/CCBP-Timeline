// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimeLineCard from '../ProjectTimeLineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimeLineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }
  return (
    <TimelineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>
            MY JOURNEY OF <br />
            <CCBPHeading>CCBP 4.0</CCBPHeading>
          </Heading>
        </HeaderContainer>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachitem => renderTimelineCard(eachitem))}
        </Chrono>
      </ResponsiveContainer>
    </TimelineContainer>
  )
}
export default TimelineView
