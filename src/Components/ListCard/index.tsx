import { StyledListCard } from "./style.js"

interface ISchedules {
  weekdays: string,
  hour: string
}

interface IListCardProps {
  object: {
    content: string,
    fountain: string,
    id: number,
    locker_room: string,
    mask: string,
    opened: boolean,
    schedules: ISchedules[],
    title: string,
    towel: string,
  }
}


export const ListCard: React.FC<IListCardProps> = ({ object }) => {
  return (
    <StyledListCard key={object.id}>
      <div>
        <span>{object.opened}</span>
        <h3>{object.title}</h3>
        <p>{object.content}</p>
      <div>
      </div>
        <p>{object.fountain}</p>
        <p>{object.locker_room}</p>
        <p>{object.mask}</p>
        <p>{object.towel}</p>
      </div>
      {/* <ul>
        <li>
          <h4>Seg. à Sex.</h4>
          <p>{object.schedules[0].hour}</p>
        </li>
        <li>
          <h4>Sáb.</h4>
          <p>{object.schedules[1].hour}</p>
        </li>
        <li>
          <h4>Dom.</h4>
          <p>{object.schedules[2].hour}</p>
        </li>
      </ul> */}
    </StyledListCard>
  )
}
