import { StyledListCard } from "./style.ts";
import requiredTowel from "../../../_material/images/required-towel.png";
import recommendedMask from "../../../_material/images/recommended-mask.png";

import requiredMask from "../../../_material/images/required-mask.png";
import recommendTowel from "../../../_material/images/recommended-towel.png";

import forbiddenFountain from "../../../_material/images/forbidden-fountain.png";
import partialFountain from "../../../_material/images/partial-fountain.png";

import requiredLockerroom from "../../../_material/images/required-lockerroom.png";
import partialLockerroom from "../../../_material/images/partial-lockerroom.png";
import forbiddenLockerroom from "../../../_material/images/forbidden-lockerroom.png";

import { StyledH3, StyledH4, StyledP } from "../../Styles/typography.ts";

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
    <StyledListCard isopen={object.opened ? "true" : "false"}>
      <div>
        {object.opened ? <span>Aberto</span> : <span>Fechado</span>}
        <StyledH3 fontSize="1.5" fontWeight="700" fontColor="grey-0">{object.title}</StyledH3>
        {
          object.schedules ?
          (
            <div dangerouslySetInnerHTML={{ __html: object.content }} />
          ):
          <StyledP fontSize=".875" fontWeight="300" fontColor="grey-2">
            {object.street}, {object.region}, {object.city_name} - {object.uf}
          </StyledP>
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
                <StyledH4 fontSize="1.25" fontWeight="700" fontColor="grey-0">{object.schedules[0].weekdays}</StyledH4>
                <StyledP fontSize=".875" fontWeight="400" fontColor="grey-2">{object.schedules[0].hour}</StyledP>
                <StyledP fontSize=".875" fontWeight="400" fontColor="grey-2">
                  {object.schedules[0].weekdays === object.schedules[1].weekdays ? object.schedules[1].hour : null}
                </StyledP>
              </li>

              <li>
                {
                  object.schedules[0].weekdays === object.schedules[1].weekdays ?
                    (
                      <>
                        <StyledH4 fontSize="1.25" fontWeight="700" fontColor="grey-0">
                          {object.schedules[2].weekdays}
                        </StyledH4>
                        <StyledP fontSize=".875" fontWeight="400" fontColor="grey-2">
                          {object.schedules[2].hour}
                        </StyledP>
                        {object.title === "Araras" ?
                        <StyledP fontSize=".875" fontWeight="400" fontColor="grey-2">
                          {object.schedules[3].hour}
                        </StyledP> : null}
                      </>
                    ) :
                    (
                      <>
                        <StyledH4 fontSize="1.25" fontWeight="700" fontColor="grey-0">
                          {object.schedules[1].weekdays}
                        </StyledH4>
                        <StyledP fontSize=".875" fontWeight="400" fontColor="grey-2">
                          {object.schedules[1].hour}
                        </StyledP>
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
                                <StyledH4 fontSize="1.25" fontWeight="700" fontColor="grey-0">
                                  {object.schedules[4].weekdays}
                                </StyledH4>
                                <StyledP fontSize=".875" fontWeight="400" fontColor="grey-2">
                                  {object.schedules[4].hour}
                                </StyledP>
                              </>
                            ) :
                            (
                              <>
                                <StyledH4 fontSize="1.25" fontWeight="700" fontColor="grey-0">
                                  {object.schedules[3].weekdays}
                                </StyledH4>
                                <StyledP fontSize=".875" fontWeight="400" fontColor="grey-2">
                                  {object.schedules[3].hour}
                                </StyledP>
                              </>
                            )
                        }
                      </>
                    ) :
                    (
                      <>
                        <StyledH4 fontSize="1.25" fontWeight="700" fontColor="grey-0">
                          {object.schedules[2].weekdays}
                        </StyledH4>
                        <StyledP fontSize=".875" fontWeight="400" fontColor="grey-2">
                          {object.schedules[2].hour}
                        </StyledP>
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
