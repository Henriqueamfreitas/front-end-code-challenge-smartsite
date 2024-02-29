import { StyledListCard } from "./style.ts"
import requiredTowel from "../../../_material/images/required-towel.png"
import recommendedMask from "../../../_material/images/recommended-mask.png"

import requiredMask from "../../../_material/images/required-mask.png"
import recommendTowel from "../../../_material/images/recommended-towel.png"

import forbiddenFountain from "../../../_material/images/forbidden-fountain.png"
import partialFountain from "../../../_material/images/partial-fountain.png"

import requiredLockerroom from "../../../_material/images/required-lockerroom.png"
import partialLockerroom from "../../../_material/images/partial-lockerroom.png"
import forbiddenLockerroom from "../../../_material/images/forbidden-lockerroom.png"
import { v4 as uuidv4 } from 'uuid';

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
    region: string,
    state_name: string,
    street: string,
    city_name: string,
    uf: string,
    isopen: string,
  },
}

export const ListCard: React.FC<IListCardProps> = ({ object }) => {
  const fountainImg = () => {
    if (object.fountain === "partial") {
      return partialFountain
    } else {
      return forbiddenFountain
    }
  }

  const lockerRoomImg = () => {
    if (object.locker_room === "partial") {
      return partialLockerroom
    } else if (object.locker_room === "allowed") {
      return requiredLockerroom
    } else {
      return forbiddenLockerroom
    }
  }

  const towelImg = () => {
    if (object.towel === "required") {
      return requiredTowel
    } else if(object.towel === "recommended"){
      return recommendTowel
    }
  }

  const maskImg = () => {
    if (object.mask === "required") {
      return requiredMask
    } else {
      return recommendedMask
    }
  }


  return (
    <StyledListCard key={uuidv4()} isopen={object.opened ? "true" : "false"}>
      <div>
        {object.opened ? <span>Aberto</span> : <span>Fechado</span>}
        <h3>{object.title}</h3>
        {
          object.schedules ?
          (
            <div dangerouslySetInnerHTML={{ __html: object.content }} />
          ):
          <p>{object.street}, {object.region}, {object.city_name} - {object.uf}</p>
        }
      </div>
      <div>
        <img src={maskImg()} alt="" />
        <img src={towelImg()} alt="" />
        <img src={fountainImg()} alt="" />
        <img src={lockerRoomImg()} alt="" />
      </div>
      {
        object.opened ?
        (
          <ul>
              <li>
                <h4>{object.schedules[0].weekdays}</h4>
                <p>{object.schedules[0].hour}</p>
                <p>{object.schedules[0].weekdays === object.schedules[1].weekdays ? object.schedules[1].hour : null}</p>
              </li>

              <li>
                {
                  object.schedules[0].weekdays === object.schedules[1].weekdays ?
                    (
                      <>
                        <h4>{object.schedules[2].weekdays}</h4>
                        <p>{object.schedules[2].hour}</p>
                        {object.title === "Araras" ? <p>{object.schedules[3].hour}</p> : null}
                      </>
                    ) :
                    (
                      <>
                        <h4>{object.schedules[1].weekdays}</h4>
                        <p>{object.schedules[1].hour}</p>
                      </>
                    )
                }
              </li>

              <li>
                {
                  object.schedules[0]?.weekdays === object.schedules[1].weekdays ?
                    (
                      <>
                        {
                          object.title === "Araras" ?
                            (
                              <>
                                <h4>{object.schedules[4].weekdays}</h4>
                                <p>{object.schedules[4].hour}</p>
                              </>
                            ) :
                            (
                              <>
                                <h4>{object.schedules[3].weekdays}</h4>
                                <p>{object.schedules[3].hour}</p>
                              </>
                            )
                        }
                      </>
                    ) :
                    (
                      <>
                        <h4>{object.schedules[2].weekdays}</h4>
                        <p>{object.schedules[2].hour}</p>
                      </>
                    )
                }
              </li>
          </ul>
        ):
        null
      }
    </StyledListCard>
  )
}
